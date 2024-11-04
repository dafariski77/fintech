import React from "react";
import UserTestimonial from "../../UserTestimonial";
import SignInCard from "../SignInCard";

export default function SignInPage() {
  return (
    <>
      <div className="my-10 flex flex-col-reverse items-center gap-28 md:flex-row">
        <UserTestimonial />
        <SignInCard />
      </div>
    </>
  );
}
