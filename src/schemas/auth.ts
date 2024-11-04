import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export const signUpSchema = z
  .object({
    email: z.string().email().min(1),
    name: z.string().min(1),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });
