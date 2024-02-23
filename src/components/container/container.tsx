import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: Props) {
    return (
        <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0 py-10`}>
            {children}
        </div>
    );
}
