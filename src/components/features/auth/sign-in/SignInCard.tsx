import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import React from "react";
import SignInForm from "./SignInForm";

export default function SignInCard() {
  return (
    <div className="">
      <Card className="p-2 md:w-[640px] md:p-4">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl">Sign In</CardTitle>
          <CardDescription>
            Welcome back! Please log in to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
