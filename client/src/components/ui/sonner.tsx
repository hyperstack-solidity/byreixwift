"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            theme="dark"
            className="toaster group"
            style={
                {
                    "--normal-bg": "#121212",
                    "--normal-text": "#FFFFFF",
                    "--normal-border": "#1E1E1E",
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster };
