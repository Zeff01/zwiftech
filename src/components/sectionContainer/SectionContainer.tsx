import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ISectionContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function SectionContainer({ children, className, ...rest }: ISectionContainer) {
  return (
    <section {...rest} className={cn("w-full py-20 overflow-hidden", className)}>
      {children}
    </section>
  );
}
