import cn from "classnames";
import styles from "./Icon.module.scss";
import type { IconType } from "./Icon.type";

export const Icon = ({ id, className }: IconType) => {
  const href = `sprite.svg#${id}`;

  return (
    <svg
      className={cn(styles.icon, className)}
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <use href={href}></use>
    </svg>
  );
};
