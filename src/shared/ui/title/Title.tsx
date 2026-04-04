import clsx from "clsx";
import { type JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
}

function Heading({ children, level = 1, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={clsx("heading", className)}>{children}</Tag>;
}

export default Heading;
