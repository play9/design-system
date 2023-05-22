import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@playnest-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {},
  argTypes: { onClick: { action: "clicked" } },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
