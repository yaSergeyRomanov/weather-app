import type { HTMLAttributes, ReactNode } from "react";

export interface HeadlingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  attr: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
