import Container from "@/components/root/Container";
import Footer from "@/components/root/Footer";
import Navbar from "@/components/root/Navbar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
