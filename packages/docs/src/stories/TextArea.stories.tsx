import type { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from "@playnest-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  args: {
    label: "Lorem ipsum",
    placeholder: "Lorem ipsum...",
    errorMsg: "Lorem ipsum...",
  },
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};
