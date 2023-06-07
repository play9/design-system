import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@playnest-ds/react";

export default {
  title: "Tipography/Text",
  component: Text,
  args: { children: "Lorem ipsum" },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
