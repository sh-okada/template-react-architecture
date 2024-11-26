import { Field } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { MarkdownEditor } from "../../../components/ui/markdown-editor";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createQuestionSchema } from "../api/create-question";
import { Button } from "../../../components/ui/button";

type CreateQuestionProps = {
  onSubmit: (data: FormData) => void;
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
      <Field>
        <Label>タイトル</Label>
        <Input {...register("title")} />
      </Field>
      <MarkdownEditor
        doc={watch().doc}
        onChangeDoc={(doc) => {
          setValue("doc", doc);
        }}
      />
      <Button type="submit">質問する</Button>
    </form>
  );
};

export { CreateQuestion };
