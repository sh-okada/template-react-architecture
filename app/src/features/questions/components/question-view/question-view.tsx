import { MarkdownViewer } from "../../../../components/ui/markdown-viewer";

type QuestionViewProps = {
  questionDoc: string;
};

const QuestionView = ({ questionDoc }: QuestionViewProps) => {
  return <MarkdownViewer doc={questionDoc} />;
};

export { QuestionView };
