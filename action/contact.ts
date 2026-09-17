"use server";

import { contactSchema } from "@/models/contact";
import nodemailer from "nodemailer";
import z from "zod";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
export const sendMail = async (data: z.infer<typeof contactSchema>) => {
  try {
    await transporter.sendMail({
      from: `"HG Systems Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: data.email,
      subject: `[Website] ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}

${data.message}
      `,
    });
    return {
      status: true,
      message: "Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form / SMTP error:", error);
    return {
      status: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again.",
    };
  }
};
