import type { HeadlingProps } from "./Headling.type";
import cn from "classnames";
import styles from "./Headling.module.scss";

export const Headling = ({
  attr = "h1",
  className,
  children,
  ...props
}: HeadlingProps) => {
  const Tag = attr;

  return (
    <Tag
      className={cn(className, styles.title, styles[`title_${attr}`])}
      {...props}
    >
      {children}
    </Tag>
  );
};
