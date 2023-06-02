import { HTMLAttributes } from "react";

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {}

export function Checkbox(props: CheckboxProps) {
  return <div {...props} />;
}
