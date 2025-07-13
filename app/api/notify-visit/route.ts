import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // Get visitor's IP address
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.ip || 
    "Unknown IP";

  // Get resolution and location from request body
  let visitorInfo = { resolution: "Unknown", location: "Unknown" };
  
  try {
    visitorInfo = await req.json();
  } catch (e) {
    console.error("Failed to parse request body");
  }

  // Setup mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Format the email content with all visitor information
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFY_EMAIL,
    subject: "🚨 New Visit to Portfolio",
    text: `Someone visited your site.\n\n📍 IP Address: ${ip}\n🌎 Location: ${visitorInfo.location || "Unknown"}\n📱 Resolution: ${visitorInfo.resolution || "Unknown"}`,
    html: `
      <h2 style="color: #9333ea;">New Portfolio Visit</h2>
      <p>Someone just visited your portfolio website.</p>
      <ul>
        <li><strong>📍 IP Address:</strong> ${ip}</li>
        <li><strong>🌎 Location:</strong> ${visitorInfo.location || "Unknown"}</li>
        <li><strong>📱 Resolution:</strong> ${visitorInfo.resolution || "Unknown"}</li>
      </ul>
      <p style="font-size: 12px; color: #666;">Sent from Klaang V Portfolio</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent with visitor information" });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

// Optional GET handler to show method not allowed
export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
