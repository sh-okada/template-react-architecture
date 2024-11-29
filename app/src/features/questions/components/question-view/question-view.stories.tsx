import { Meta, StoryObj } from "@storybook/react";
import { QuestionView } from "./question-view";

const meta: Meta<typeof QuestionView> = {
  component: QuestionView,
};

export default meta;
type Story = StoryObj<typeof QuestionView>;

export const Default: Story = {
  args: {
    doc: "# Hello World",
  },
};
