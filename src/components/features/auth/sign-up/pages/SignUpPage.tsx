import React from "react";
import SignUpCard from "../SignUpCard";
import UserTestimonial from "../../UserTestimonial";

export default function SignUpPage() {
  return (
    <>
      <div className="my-10 flex flex-col-reverse items-center gap-28 md:flex-row">
        <UserTestimonial />
        <SignUpCard />
      </div>
    </>
  );
}
