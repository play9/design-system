import type { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from "@playnest-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  args: { placeholder: "Lorem ipsum..." },
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};

export const WithLabel: StoryObj<TextAreaProps> = {
  args: { label: "Lorem ipsum" },
};

export const WithError: StoryObj<TextAreaProps> = {
  args: { errorMsg: "Lorem ipsum" },
};

export const WithHelp: StoryObj<TextAreaProps> = {
  args: { help: "Lorem ipsum" },
};
