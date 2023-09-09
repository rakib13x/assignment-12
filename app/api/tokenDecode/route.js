import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let token = searchParams.get("token");
  try {
    let JWT_KEY = new TextEncoder().encode("dfhgsjfhjsd-fdjfh-fhdkj");
    let decode = await jwtVerify(token, JWT_KEY);
    return NextResponse.json({ status: "success", decode: decode["payload"] });
  } catch (e) {
    return NextResponse.json({ status: "fail" });
  }
}
