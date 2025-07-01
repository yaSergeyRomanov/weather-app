import type { InputHTMLAttributes, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  ref?: Ref<HTMLInputElement> | undefined;
}
