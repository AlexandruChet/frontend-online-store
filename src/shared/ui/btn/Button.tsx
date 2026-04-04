import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./btn.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

function Button({
  children,
  className,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button className={clsx("btn", `btn-${variant}`, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
