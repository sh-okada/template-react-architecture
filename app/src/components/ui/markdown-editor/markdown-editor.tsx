import {
  OnChangeDoc,
  useMarkdownEditor,
} from "../../../hooks/use-markdown-editor";

type MarkdownEditorProps = {
  doc: string;
  onChangeDoc: OnChangeDoc;
  placeholder?: string;
};

const MarkdownEditor = ({
  doc,
  onChangeDoc,
  placeholder,
}: MarkdownEditorProps) => {
  const { editor } = useMarkdownEditor({
    doc: doc,
    onChangeDoc: onChangeDoc,
    placeholderText: placeholder,
  });

  return <div ref={editor} />;
};

export { MarkdownEditor, type MarkdownEditorProps };
