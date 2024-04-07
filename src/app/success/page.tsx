import React from "react";
import Container from "@/components/container/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuccessPage() {
  return (
    <Container className="flex items-center justify-center py-20 ">
      <div className="min-h-96 flex flex-col items-center justify-center gap-y-5 bg-myPrimary bg-opacity-10 p-4 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold">Congratulation!</h2>
        <div className="flex items-center gap-x-5">
          {/* <Link href="/orders">
            <Button size="lg">View Orders</Button>
          </Link> */}
          <Link href="/">
            <Button className="bg-myPrimary">Continue Shopping</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center text-center">
          <p>
            Thank you for shopping with us and we look forward to seeing you
            back!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default SuccessPage;
