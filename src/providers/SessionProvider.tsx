"use client";

import type { Session } from "next-auth";
import React from "react";
import { SessionProvider as AuthProvider } from "next-auth/react";

export default function SessionProvider({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return <AuthProvider session={session}>{children}</AuthProvider>;
}
