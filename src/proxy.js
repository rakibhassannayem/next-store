import { NextResponse } from "next/server";

export function proxy(request) {
  const user = request.cookies.get("user")?.value;

  if (!user && request.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};