import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef, ForwardedRef } from "react";

const buttonVariants = cva(
  "w-[182px] inline flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 shadow-md",
  {
    variants: {
      variant: {
        default: "bg-custom-purple text-white",
        outline: "border border-custom-black text-black",
        icon: "w-[80px] h-[80px] px-0 py-0 bg-custom-purple text-white",
        ghost: "text-black shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default forwardRef(function Button(
  { children, className, variant, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props}>
      {children}
    </button>
  );
});
