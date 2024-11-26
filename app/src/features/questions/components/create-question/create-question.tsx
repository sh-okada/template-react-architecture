import { Input } from "../../../../components/ui/input";
import { MarkdownEditor } from "../../../../components/ui/markdown-editor";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CreateQuestionData,
  createQuestionSchema,
} from "../../api/create-question";
import { Button } from "../../../../components/ui/button";

type CreateQuestionProps = {
  onSubmit: (data: CreateQuestionData) => void;
};

const CreateQuestion = ({ onSubmit }: CreateQuestionProps) => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(createQuestionSchema),
    defaultValues: {
      title: "",
      doc: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="block mb-5"
        blockSize="sm"
        placeholder="タイトル"
        {...register("title")}
      />
      <MarkdownEditor
        className="mb-5"
        doc={watch().doc}
        onChangeDoc={(doc) => {
          setValue("doc", doc);
        }}
        placeholder="..."
      />
      <Button type="submit">質問する</Button>
    </form>
  );
};

export { CreateQuestion };
