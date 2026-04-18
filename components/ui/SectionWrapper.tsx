import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-20 md:py-32 w-full", className)}
        {...props}
      >
        <div className="container mx-auto px-6 md:px-12">
          {children}
        </div>
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";
