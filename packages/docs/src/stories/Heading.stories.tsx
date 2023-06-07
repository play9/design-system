import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@playnest-ds/react";

export default {
  title: "Tipography/Heading",
  component: Heading,
  args: { children: "Lorem ipsum" },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
