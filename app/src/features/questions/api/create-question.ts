import { yup, InferType } from "../../../lib/yup";

const createQuestionSchema = yup
  .object({
    title: yup.string().label("タイトル").required().min(5).max(200),
    doc: yup.string().label("質問内容").required(),
  })
  .required();

type CreateQuestionData = InferType<typeof createQuestionSchema>;

export { createQuestionSchema, type CreateQuestionData };
