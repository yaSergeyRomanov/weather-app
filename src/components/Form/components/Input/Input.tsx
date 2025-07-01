import type { InputProps } from "./Input.type";
import cn from "classnames";
import styles from "./Input.module.scss";

export const Input = ({ className, isValid, ref, ...props }: InputProps) => {
  return (
    <input
      className={cn(styles.input, className, { [styles.invalid]: isValid })}
      {...props}
      ref={ref}
    />
  );
};
