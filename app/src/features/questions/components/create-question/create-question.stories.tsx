import { Meta, StoryObj } from "@storybook/react";
import { CreateQuestion } from "./create-question";

const meta: Meta<typeof CreateQuestion> = {
  component: CreateQuestion,
};

export default meta;
type Story = StoryObj<typeof CreateQuestion>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log(data),
  },
};
