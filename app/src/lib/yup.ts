import * as yupDefault from "yup";
import { InferType } from "yup";

yupDefault.setLocale({
  string: {
    length: ({ label, length }) => `${label}は${length}文字入力して下さい`,
    min: ({ label, min }) => `${label}は${min}文字以上入力してください`,
    max: ({ label, max }) => `${label}は${max}文字以内で入力して下さい`,
    matches: ({ label }) => `${label}の形式として正しくありません`,
    email: "メールアドレスの形式として正しくありません",
  },
  number: {
    min: ({ label, min }) => `${label}は${min}以上の値を入力して下さい`,
    max: ({ label, max }) => `${label}は${max}以下の値を入力して下さい`,
    lessThan: ({ label, less }) =>
      `${label}は${less}より小さい値を入力して下さい`,
    moreThan: ({ label, more }) =>
      `${label}は${more}より大きい値を入力して下さい`,
    positive: "正の数を入力して下さい",
    negative: "負の数を入力して下さい",
    integer: "整数を入力して下さい",
  },
});

const yup = yupDefault;

export { yup, type InferType };
