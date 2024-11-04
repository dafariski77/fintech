"use server";

import { API_URL, BASE_URL } from "@/configs/api";
import { signInSchema } from "@/schemas/auth";
import { signIn } from "next-auth/react";
import { z } from "zod";

export async function registerUser(data: z.infer<typeof signInSchema>) {
  try {
    const result = await fetch(BASE_URL + API_URL.SIGN_UP, {
      body: JSON.stringify(data),
      method: "POST",
    });

    return result.json();
  } catch (error: unknown) {
    throw error;
  }
}
