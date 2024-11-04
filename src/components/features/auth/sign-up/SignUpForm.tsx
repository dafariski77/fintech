import FieldGroup from "@/components/root/FieldGroup";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { signUpSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { registerUser } from "../sign-in/actions/actions";
import { signIn } from "next-auth/react";

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      await registerUser(data);

      router.push("/auth/sign-in");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-8">
        <FieldGroup error={errors.name?.message}>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            placeholder="Enter your Name"
            type="text"
            id="fullname"
            {...register("name")}
          />
        </FieldGroup>
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
        <FieldGroup error={errors.confirmPassword?.message}>
          <Label htmlFor="confirmPassword">Password Confirmation</Label>
          <Input
            placeholder="Enter your Password Confirmation"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
        </FieldGroup>
        <div className="flex flex-row items-center gap-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <Button type="submit" size={"lg"} isLoading={isSubmitting}>
          Sign Up
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
          onClick={() => signIn("google")}
        >
          Sign Up With Google
        </Button>
        <div className="flex items-center justify-center gap-x-2">
          <p>Already have an account?</p>
          <Link href={"/auth/sign-in"} className="flex items-center gap-1">
            <span className="underline">Sign In</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </form>
  );
}
