"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative px-10 py-4 rounded-full font-semibold text-lg",
          "backdrop-blur-xl bg-[rgba(43,55,80,0.2)] shadow-2xl", // Glass effect with shadow
          "overflow-hidden transition-all duration-300 hover:scale-110", // Scale on hover
          "hover:shadow-lg hover:translate-y-1", // 3D effects with shadow and translation
          "text-white light:text-black", // Text color (white in dark mode, black in light mode)
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

HoverButton.displayName = "HoverButton";

export { HoverButton };
