import { MarkdownViewer } from "../../../../components/ui/markdown-viewer";

type QuestionViewProps = {
  doc: string;
};

const QuestionView = ({ doc }: QuestionViewProps) => {
  return <MarkdownViewer doc={doc} />;
};

export { QuestionView };
