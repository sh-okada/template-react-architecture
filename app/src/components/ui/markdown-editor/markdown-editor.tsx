import { useMarkdownEditor } from "../../../hooks/use-markdown-editor";

type MarkdownEditorProps = {
  doc?: string;
};

const MarkdownEditor = ({ doc = "" }: MarkdownEditorProps) => {
  const { editor } = useMarkdownEditor({ doc: doc });

  return <div ref={editor} />;
};

export { MarkdownEditor };
