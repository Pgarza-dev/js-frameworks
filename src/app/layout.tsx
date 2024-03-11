import Header from "@/components/header/Header";
import "./css/globals.css";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "UrbanFinds",
    default: "UrbanFinds - Pablo Garza",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-lightModeBody">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
