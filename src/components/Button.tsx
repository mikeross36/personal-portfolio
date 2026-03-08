import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  glow = true,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = `inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 
  disabled:cursor-not-allowed cursor-pointer`;
  const variants = {
    primary:
      "bg-primary text-white border border-transparent hover:bg-primary/90",
    secondary:
      "bg-secondary text-white border border-transparent hover:bg-secondary/90",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const glowEffect =
    glow && variant !== "ghost"
      ? variant === "secondary"
        ? "hover:shadow-neon-blue"
        : "hover:shadow-neon"
      : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowEffect} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
