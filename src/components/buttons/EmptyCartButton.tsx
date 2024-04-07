import React from "react";
import useProductStore from "@/store/cart";
import { Button } from "../ui/button";

type Prop = {
    clearCart: () => void;
};

export default function EmptyCartButton({ clearCart }: Prop) {
    const { getTotalNumberOfItemsInCart } = useProductStore();

    
    return (
        <div>
            {getTotalNumberOfItemsInCart() === 0 && (
                 <Button
                 variant="destructive"
                   className=" mt-4 py-3 px-6 duration-300 uppercase"
                   disabled>
                   Cart Is Empty
                 </Button>
                 )}
            {getTotalNumberOfItemsInCart() !== 0 && (
                <Button
                    onClick={clearCart}
                    className="capitalize bg-primary text-base font-medium text-white py-2 px-6 hover:bg-red-500 duration-200"
                >
                    empty cart
                </Button>
            )}
        </div>
    );
}
