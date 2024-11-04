import ApiResponse from "@/lib/apiResponse";
import { signUpSchema } from "@/schemas/auth";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const payload: z.infer<typeof signUpSchema> = await req.json();

    const validate = signUpSchema.safeParse(payload);

    if (!validate.success) {
      return ApiResponse({
        code: 400,
        message: validate.error.message[0],
      });
    }

    const data: Prisma.UserCreateInput = {
      name: payload.name,
      email: payload.email,
      password: bcrypt.hashSync(payload.password, 8),
    };

    await prisma.user.create({
      data,
    });

    return ApiResponse({
      message: "Sign up success",
      code: 200,
    });
  } catch (error: unknown) {
    return ApiResponse({
      code: 500,
      message: "Sign in failed",
      error: (error as Error).message,
    });
  }
}
