import type { Meta, StoryObj } from "@storybook/react";
import { Loading, LoadingProps } from "@playnest-ui/react";

export default {
  title: "General/Loading",
  component: Loading,
  args: { size: 21 },
  argTypes: { color: { control: "color" } },
} as Meta<LoadingProps>;

export const Primary: StoryObj<LoadingProps> = {};
