import cn from "classnames";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./type";

export const Button = ({
  className,
  iconOnly,
  ref,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.iconOnly]: iconOnly,
      })}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
};
