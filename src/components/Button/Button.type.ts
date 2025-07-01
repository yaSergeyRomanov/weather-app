import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconOnly?: boolean;
  ref?: Ref<HTMLButtonElement> | undefined;
}
