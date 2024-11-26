import "highlight.js/styles/a11y-dark.css";
import { markdownIt } from "../../../lib/markdown-it";
import { MarkdownEditorProps } from "../markdown-editor";

type MarkdownViewerProps = {
  doc: string;
};

const MarkdownViewer = ({ doc }: MarkdownViewerProps) => {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html: markdownIt.render(doc),
      }}
    />
  );
};

export { MarkdownViewer, type MarkdownEditorProps };
