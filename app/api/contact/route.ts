import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, budget, message } = body;

    // SMTP Configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SignumCode Contact Form" <${process.env.SMTP_USER}>`,
      to: "info@signumcode.in", // Recipient email
      subject: `New Lead: ${name} from ${company || "New Client"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Budget: ${budget}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0070f3;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <hr />
          <p style="font-size: 12px; color: #666;">Sent from SignumCode Portfolio Website</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
