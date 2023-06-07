import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "@playnest-ds/react";

export default {
  title: "Form/Switch",
  component: Switch,
  args: { placeholder: "Lorem ipsum..." },
} as Meta<SwitchProps>;

export const Unchecked: StoryObj<SwitchProps> = {
  args: { checked: false },
};

export const Checked: StoryObj<SwitchProps> = {
  args: { checked: true },
};

export const WithLabel: StoryObj<SwitchProps> = {
  args: { label: "Lorem ipsum" },
};

export const WithError: StoryObj<SwitchProps> = {
  args: { errorMsg: "Lorem ipsum" },
};

export const WithHelp: StoryObj<SwitchProps> = {
  args: { help: "Lorem ipsum" },
};
