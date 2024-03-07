import Container from "@/components/container/Container";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
        <p className="text-base font-medium text bg-center">
          Oops the page you are looking for might have taken the day off?
        </p>
        <Link
          href="/"
          className="bg-secondary text-lightText w-44 h-12 rounded-full flex items-center justify-center font-semibold text-center hover:ring-1 hover:bg-white hover:text-darkText hover:ring-black">
          Go back home
        </Link>
      </div>
    </Container>
  );
}

// export default NotFoundPage;
