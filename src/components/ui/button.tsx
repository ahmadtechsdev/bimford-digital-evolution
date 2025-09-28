import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-brand hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-brand hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        ghost: "hover:bg-primary/10 hover:text-primary transition-colors duration-200",
        link: "text-primary hover:text-primary/80 underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-brand shadow-xl hover:scale-[1.05] active:scale-[0.95] font-bold",
        cta: "bg-gradient-brand text-primary-foreground hover:shadow-brand shadow-xl hover:scale-[1.05] active:scale-[0.95] font-bold shimmer",
        glass: "bg-background/80 backdrop-blur-md border border-primary/20 text-primary hover:bg-primary/10 shadow-lg hover:shadow-brand",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-xl px-6 text-sm",
        lg: "h-16 rounded-2xl px-12 text-lg font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
