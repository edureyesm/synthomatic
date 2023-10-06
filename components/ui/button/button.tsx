"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { FocusRing, useButton } from "react-aria";
import { motion, useAnimation } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex touch-none select-none items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-cyan-400 text-white hover:bg-cyan-400/90",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-cyan-400 bg-white hover:bg-cyan-400 hover:text-white",
        secondary: "bg-white text-cyan-400 hover:bg-white/80",
        link: "text-cyan-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }) => {
    let controls = useAnimation();
    let ref = React.useRef<HTMLButtonElement>(null);
    let { buttonProps } = useButton(
      {
        onPressStart: () => {
          controls.stop();
          controls.set({ opacity: 0.5 });
        },
        onPressEnd: () => {
          controls.start({ opacity: 1, transition: { duration: 0.4 } });
        },
        onPress: () => {
          props.onClick;
        },
      },
      ref,
    );

    if (asChild)
      return (
        <FocusRing focusRingClass="ring ring-offset-2 ring-offset-white">
          <Slot
            className={cn(buttonVariants({ variant, size, className }))}
            {...buttonProps}
            {...props}
          />
        </FocusRing>
      );

    return (
      <FocusRing focusRingClass="ring ring-offset-2 ring-offset-white">
        <motion.button
          animate={controls}
          style={{ WebkitTapHighlightColor: "transparent" }}
          className={cn(buttonVariants({ variant, size, className }))}
          {...buttonProps}
          {...props}
        />
      </FocusRing>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
