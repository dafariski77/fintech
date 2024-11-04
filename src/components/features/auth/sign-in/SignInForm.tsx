import FieldGroup from "@/components/root/FieldGroup";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { signInSchema } from "@/schemas/auth";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: searchParams.get("callbackUrl") || "/",
        redirect: false,
      });

      if (!user?.error) {
        router.push(user?.url || "/");
      } else {
        toast.error("Invalid Credentials");

        return;
      }
    } catch (error) {
      toast.error("Something wrong");

      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-8">
        <FieldGroup error={errors.email?.message}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Enter your Email"
            type="email"
            id="email"
            {...register("email")}
          />
        </FieldGroup>
        <FieldGroup error={errors.password?.message}>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Enter your Password"
            type="password"
            id="password"
            {...register("password")}
          />
        </FieldGroup>
        <div className="flex w-full justify-end">
          <Link href={"#"}>
            <p>Forgot Password?</p>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember Me</Label>
        </div>
        <Button type="submit" size={"lg"} isLoading={isSubmitting}>
          Sign In
        </Button>
        <div className="flex w-full flex-row items-center gap-x-4">
          <Separator className="w-2/5" />
          <p className="w-1/5 text-center">OR</p>
          <Separator className="w-2/5" />
        </div>
        <Button
          type="button"
          variant={"secondary"}
          size={"lg"}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign In With Google
        </Button>
        <div className="flex items-center justify-center gap-x-2">
          <p>Don't have an account?</p>
          <Link href={"/auth/sign-up"} className="flex items-center gap-1">
            <span className="underline">Sign Up</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </form>
  );
}
