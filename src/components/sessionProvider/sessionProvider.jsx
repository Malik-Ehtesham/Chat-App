"use client";
import { SessionProvider } from "next-auth/react";

const SProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SProvider;
