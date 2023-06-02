import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@playnest-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: { placeholder: "Lorem ipsum..." },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithLabel: StoryObj<TextInputProps> = {
  args: { label: "Lorem ipsum" },
};

export const WithError: StoryObj<TextInputProps> = {
  args: { errorMsg: "Lorem ipsum" },
};

export const WithHelp: StoryObj<TextInputProps> = {
  args: { help: "Lorem ipsum" },
};
