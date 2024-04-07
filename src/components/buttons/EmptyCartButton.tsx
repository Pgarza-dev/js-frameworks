import React from "react";
import { Button } from "../ui/button";

type Prop = {
    clearCart: () => void;
};

export default function EmptyCartButton({ clearCart }: Prop) {
    return (
        <div>
            <Button
                onClick={clearCart}
                className="capitalize bg-primary text-base font-medium text-white py-2 px-6 hover:bg-red-500 duration-200"
            >
                empty cart
            </Button>
        </div>
    );
}
