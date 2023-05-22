import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return <input {...props} />;
}
