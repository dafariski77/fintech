import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpCard() {
  return (
    <div className="">
      <Card className="md:w-[640px] p-2 md:p-4">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Sign Up</CardTitle>
          <CardDescription>
            Create an account to unlock exclusive features.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
