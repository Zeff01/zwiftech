import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef, ForwardedRef } from "react";

const buttonVariants = cva(
  "w-[150px] sm:w-[182px] inline flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-md transition-all duration-200 active:scale-90",
  {
    variants: {
      variant: {
        default: "bg-custom-purple text-white hover:bg-custom-purple/80 ",
        outline:
          "border border-custom-black text-black hover:border-transparent hover:bg-custom-purple hover:text-custom-white",
        icon: "w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] px-0 py-0 bg-custom-purple text-custom-yellow border border-transparent hover:border-custom-purple hover:bg-transparent hover:text-custom-purple ",
        ghost: "text-black shadow-none border border-transparent hover:border-custom-black",
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
