import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./btn.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "buy_logic" | "feedback_logic" | "add_to_order";
  text: string;
}

function Button({
  className,
  variant = "add_to_order",
  text,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx("btn", `btn-${variant}`, className)}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
