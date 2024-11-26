import { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditor } from "./markdown-editor";

const meta: Meta<typeof MarkdownEditor> = {
  component: MarkdownEditor,
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {
  args: {
    doc: "",
    onChangeDoc: (doc) => console.log(doc),
    placeholder: "content here.",
  },
};
