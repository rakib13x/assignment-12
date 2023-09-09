import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let email = searchParams.get("email");

  try {
    nodemailer.createTransport({
      host: "mail.teamrabbil.com",
      port: 25,
      secure: false,
      auth: {
        user: "info@teamrabbil.com",
        pass: "~sR4[bhaC[Qs",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let emailContent = {
      from: "info@teamrabbil.com",
      to: email,
      subject: "Assignment",
      html: "<p>Hello from demo app</p>",
    };

    await config.sendMail(emailContent);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ status: "fail" });
  }

  return NextResponse.json({ email: email });
}
