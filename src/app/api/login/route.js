import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "montu@mia" && password === "123456") {
    cookies().set("auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
