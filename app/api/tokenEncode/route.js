import { SignJWT } from "jose";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let email = searchParams.get("email");
  try {
    let payload = { email: email, user_id: 1 };
    let JWT_KEY = new TextEncoder().encode("dfhgsjfhjsd-fdjfh-fhdkj");
    let algorithm = { alg: "HS256" };
    let issuer = "this is a demo app";
    let expiresIn = "1h";

    let token = await new SignJWT(payload)
      .setProtectedHeader(algorithm)
      .setIssuedAt()
      .setIssuer(issuer)
      .setExpirationTime(expiresIn)
      .sign(JWT_KEY);

    return NextResponse.json({ status: "success", token: token });
  } catch (e) {
    return NextResponse.json({ status: "fail" });
  }
}
