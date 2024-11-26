import { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditor } from "./markdown-editor";

const meta: Meta<typeof MarkdownEditor> = {
  component: MarkdownEditor,
  args: {
    doc: "",
    onChangeDoc: (doc) => console.log(doc),
    placeholder: "content here.",
  },
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {};

export const WithStyle: Story = {
  args: {
    editorStyle: {
      "&": {
        minHeight: "500px",
      },
      "&.cm-editor": {
        outline: "none",
      },
    },
  },
};
