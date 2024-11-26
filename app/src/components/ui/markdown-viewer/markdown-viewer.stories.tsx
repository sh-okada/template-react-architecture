import { Meta, StoryObj } from "@storybook/react";
import { MarkdownViewer } from "./markdown-viewr";

const meta: Meta<typeof MarkdownViewer> = {
  component: MarkdownViewer,
};

export default meta;
type Story = StoryObj<typeof MarkdownViewer>;

const sampleDoc = `
# Hello World

~~~python
def hoge():
  print("piyo")
~~~
`;

export const Default: Story = {
  args: {
    doc: sampleDoc,
  },
};
