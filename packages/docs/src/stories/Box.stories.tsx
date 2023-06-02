import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps } from "@playnest-ui/react";

export default {
  title: "General/Box",
  component: Box,
  args: {
    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
