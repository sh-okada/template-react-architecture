import { Meta, StoryObj } from "@storybook/react";
import { QuestionList } from "./question-list";

const meta: Meta<typeof QuestionList> = {
  component: QuestionList,
};

export default meta;
type Story = StoryObj<typeof QuestionList>;

export const Default: Story = {
  args: {
    questions: [
      {
        questionId: "1",
        questionTitle: "タイトル1",
        user: {
          userId: "1",
          username: "user1",
        },
      },
      {
        questionId: "2",
        questionTitle: "タイトル2",
        user: {
          userId: "2",
          username: "user2",
        },
      },
      {
        questionId: "3",
        questionTitle: "タイトル3",
        user: {
          userId: "3",
          username: "user3",
        },
      },
      {
        questionId: "4",
        questionTitle: "タイトル4",
        user: {
          userId: "4",
          username: "user4",
        },
      },
      {
        questionId: "5",
        questionTitle: "タイトル5",
        user: {
          userId: "5",
          username: "user5",
        },
      },
      {
        questionId: "6",
        questionTitle: "タイトル6",
        user: {
          userId: "6",
          username: "user6",
        },
      },
      {
        questionId: "7",
        questionTitle: "タイトル7",
        user: {
          userId: "7",
          username: "user7",
        },
      },
      {
        questionId: "8",
        questionTitle: "タイトル8",
        user: {
          userId: "8",
          username: "user8",
        },
      },
      {
        questionId: "9",
        questionTitle: "タイトル9",
        user: {
          userId: "9",
          username: "user9",
        },
      },
      {
        questionId: "10",
        questionTitle: "タイトル10",
        user: {
          userId: "10",
          username: "user10",
        },
      },
    ],
  },
};
