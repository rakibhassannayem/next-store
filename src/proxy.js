import { NextResponse } from "next/server";

export function proxy(request) {
  const userCookie = request.cookies.get("user");
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedRoutes = ["/products"];

  // If user is not logged in and trying to access a protected route
  if (!userCookie && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is logged in and trying to access login page
  if (userCookie && pathname === "/login") {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/login"],
};
