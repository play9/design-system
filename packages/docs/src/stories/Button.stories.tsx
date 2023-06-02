import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@playnest-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: { variant: "primary", children: "Lorem ipsum", loading: false },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: { variant: "secondary" },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: { variant: "tertiary" },
};

export const Quaternary: StoryObj<ButtonProps> = {
  args: { variant: "quaternary" },
};

export const Quinternary: StoryObj<ButtonProps> = {
  args: { variant: "quinternary" },
};

export const Sixternary: StoryObj<ButtonProps> = {
  args: { variant: "sixternary" },
};
