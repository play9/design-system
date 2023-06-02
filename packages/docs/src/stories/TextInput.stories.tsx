import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@playnest-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {
    label: "Lorem ipsum",
    placeholder: "Lorem ipsum...",
    errorMsg: "Lorem ipsum...",
  },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};
