import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = (props: TextAreaProps) => {
  return <textarea {...props} />;
};
