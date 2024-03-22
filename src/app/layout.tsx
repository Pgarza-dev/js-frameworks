import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "@/app/styles/globals.css";

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
