import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log("Contact form request received:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    });

    if (!name || !email || !subject || !message) {
      console.warn("Contact form validation failed:", {
        name: Boolean(name),
        email: Boolean(email),
        subject: Boolean(subject),
        message: Boolean(message),
      });

      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Attempting SMTP connection:", {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      user: process.env.MAIL_USER,
      mailTo: process.env.MAIL_TO,
      passwordLoaded: Boolean(process.env.MAIL_PASSWORD),
    });

    await transporter.verify();

    console.log("SMTP authentication successful");

    await transporter.sendMail({
      from: `"HG Systems Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    console.log("Contact email sent successfully");

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form / SMTP error:", error);

    return Response.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}