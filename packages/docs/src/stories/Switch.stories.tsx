import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "@playnest-ui/react";

export default {
  title: "Form/Switch",
  component: Switch,
  args: { checked: true },
} as Meta<SwitchProps>;

export const Primary: StoryObj<SwitchProps> = {};
