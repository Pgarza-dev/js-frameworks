import type { Metadata } from "next";

import "./css/globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bodyColor">
        <Header />
        {children}
      </body>
    </html>
  );
}
