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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createQuestionSchema),
    defaultValues: {
      title: "",
      doc: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input
          className="w-full"
          blockSize="sm"
          placeholder="タイトル内容"
          helperText={errors.title?.message}
          invalid={Boolean(errors.title)}
          {...register("title")}
        />
        <MarkdownEditor
          editorStyle={{
            "&": {
              minHeight: "500px",
            },
            "&.cm-editor": {
              outline: "none",
            },
          }}
          doc={watch().doc}
          onChangeDoc={(doc) => {
            setValue("doc", doc);
          }}
          placeholder="内容"
        />
        <Button type="submit">質問する</Button>
      </div>
    </form>
  );
};

export { CreateQuestion };
