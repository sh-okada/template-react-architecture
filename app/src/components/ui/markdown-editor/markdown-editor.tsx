import {
  EditorStyle,
  OnChangeDoc,
  useMarkdownEditor,
} from "../../../hooks/use-markdown-editor";

type MarkdownEditorProps = Omit<React.ComponentProps<"div">, "ref"> & {
  doc: string;
  onChangeDoc: OnChangeDoc;
  placeholder?: string;
  editorStyle?: EditorStyle;
};

const MarkdownEditor = ({
  className,
  doc,
  onChangeDoc,
  placeholder,
  editorStyle,
  ...props
}: MarkdownEditorProps) => {
  const { editor } = useMarkdownEditor({
    doc: doc,
    onChangeDoc: onChangeDoc,
    placeholderText: placeholder,
    editorStyle: editorStyle,
  });

  return (
    <div
      className={`p-2 border-primary-600 rounded-lg border ${className ?? ""}`}
      ref={editor}
      {...props}
    />
  );
};

export { MarkdownEditor, type MarkdownEditorProps };
