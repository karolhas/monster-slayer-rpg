//hooks
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

//variants
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-white rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-500  hover:bg-blue-600",
        secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
        outline: "bg-transparent border-2 border-gray-700 text-gray-700",
        destructive: "bg-red-500 hover:bg-red-700",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-9 px-4",
        lg: "h-11 px-9",
      },
      weight: {
        normal: "font-normal",
        light: "font-light",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      weight: "normal",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  weight,
  href,
  onClick,
  disabled = false,
  children,
  className,
}) => {
  const buttonClasses = twMerge(
    buttonVariants({ variant, size, weight }),
    disabled && "bg-gray-500 cursor-not-allowed",
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
