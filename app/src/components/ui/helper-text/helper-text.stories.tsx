import { Meta, StoryObj } from "@storybook/react";
import { HelperText } from "./helper-text";

const meta: Meta<typeof HelperText> = {
  component: HelperText,
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    children: "ヘルパーテキスト",
  },
};
