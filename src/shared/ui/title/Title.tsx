import clsx from "clsx";

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

function Heading({ text, level}: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;
  return <Tag className={clsx("heading")}>{text}</Tag>;
}

export default Heading;
