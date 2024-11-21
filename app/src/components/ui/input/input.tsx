import { Input as HeadlessuiInput } from "@headlessui/react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return <HeadlessuiInput {...props} />;
};

export { Input };
