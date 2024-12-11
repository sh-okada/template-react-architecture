import { Link } from "../../../../components/ui/link";
import { paths } from "../../../../config/paths";

type QuestionListItem = {
  questionId: string;
  questionTitle: string;
  user: {
    userId: string;
    username: string;
  };
};

type ItemProps = QuestionListItem;

const Item = ({ questionId, questionTitle, user }: ItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Link to={paths.question.getHref(questionId)}>{questionTitle}</Link>
      <p className="text-xs text-right">{user.username}</p>
    </div>
  );
};

type QuestionListProps = {
  questions: QuestionListItem[];
};

const QuestionList: React.FunctionComponent<QuestionListProps> & {
  Item: typeof Item;
} = ({ questions }: QuestionListProps) => {
  return (
    <div className="flex flex-col divide-y gap-2">
      {questions.map((question) => (
        <QuestionList.Item
          key={question.questionId}
          questionId={question.questionId}
          questionTitle={question.questionTitle}
          user={question.user}
        />
      ))}
    </div>
  );
};

export { QuestionList };

QuestionList.Item = Item;
