import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-zinc-900 text-white hover:bg-zinc-800": variant === "primary",
            "bg-zinc-100 text-zinc-900 hover:bg-zinc-200": variant === "secondary",
            "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900": variant === "outline",
            "hover:bg-zinc-100 hover:text-zinc-900": variant === "ghost",
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
