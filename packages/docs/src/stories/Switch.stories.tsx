import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "@playnest-ui/react";

export default {
  title: "Form/Switch",
  component: Switch,
  args: {
    label: "Lorem ipsum",
    placeholder: "Lorem ipsum...",
    errorMsg: "Lorem ipsum...",
    checked: true,
    children: "Lorem ipsum",
  },
} as Meta<SwitchProps>;

export const Primary: StoryObj<SwitchProps> = {};
