import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Label } from "../label";
import { Field } from "../field";
import { HelperText } from "../helper-text";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const FieldInput: Story = {
  render: (args) => {
    return (
      <Field>
        <Label>名前</Label>
        <Input {...args} />
        <HelperText>ヘルパーテキスト</HelperText>
      </Field>
    );
  },
  args: {
    className: "block",
    placeholder: "岡田修太",
  },
};
