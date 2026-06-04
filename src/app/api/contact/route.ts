import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, inquiryType, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Inquiry</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; color: #333333; margin: 0; padding: 20px; }
            .container { max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); margin: 0 auto; border: 1px solid #e1e4e8; }
            .header { background: linear-gradient(135deg, #6d28d9, #4c1d95); padding: 30px 20px; text-align: center; }
            .header h2 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
            .content { padding: 30px 25px; }
            .grid { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .grid td { padding: 10px 0; border-bottom: 1px solid #f0f2f5; vertical-align: top; }
            .label { font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; width: 30%; }
            .value { font-size: 15px; color: #1f2937; width: 70%; }
            .badge { display: inline-block; padding: 4px 10px; background-color: #ede9fe; color: #5b21b6; font-size: 13px; font-weight: 600; border-radius: 6px; }
            .message-box { background-color: #f8fafc; border-left: 4px solid #6d28d9; padding: 15px 20px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; color: #374151; margin-top: 5px; white-space: pre-line; }
            .footer { background-color: #f9fafb; padding: 15px 20px; text-align: center; border-top: 1px solid #f0f2f5; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Inquiry from Portfolio</h2>
            </div>
            <div class="content">
              <table class="grid">
                <tr>
                  <td class="label">Name</td>
                  <td class="value"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email</td>
                  <td class="value"><a href="mailto:${email}" style="color: #6d28d9; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Inquiry Type</td>
                  <td class="value"><span class="badge">${inquiryType}</span></td>
                </tr>
                <tr>
                  <td class="label">Subject</td>
                  <td class="value">${subject}</td>
                </tr>
              </table>
              
              <div class="label" style="margin-bottom: 10px;">Message</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
            <div class="footer">
              This email was sent dynamically via the portfolio contact form route handler.
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${inquiryType} - ${subject}`,
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
