import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email")
    .max(254, "Email is too long"),

  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(150, "Subject must be less than 150 characters"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});