import ApiResponse from "@/lib/apiResponse";
import { prisma } from "@/lib/prisma";
import { signInSchema } from "@/schemas/auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const payload: z.infer<typeof signInSchema> = await req.json();

    const validate = signInSchema.safeParse(payload);

    if (!validate.success) {
      return ApiResponse({
        code: 400,
        message: validate.error.message[0],
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!user || !bcrypt.compareSync(payload.password, user.password)) {
      return ApiResponse({
        message: "Invalid credentials!",
        code: 400,
      });
    }

    const data: Partial<User> = {
      ...user,
      password: undefined,
    };

    return ApiResponse({
      code: 200,
      message: "Sign in success",
      data,
    });
  } catch (error: unknown) {
    return ApiResponse({
      code: 500,
      message: "Sign in failed",
      error: (error as Error).message,
    });
  }
}
