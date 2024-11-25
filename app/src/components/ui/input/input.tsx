import {
  Input as HeadlessuiInput,
  InputProps as HeadlessuiInputProps,
} from "@headlessui/react";

type InputBlockSize = "lg" | "md" | "sm";

const inputBaseStyle = (color: "primary" | "carmine") => `
  rounded-lg
  bg-white
  text-base
  px-4
  py-3
  border
  border-${color}-600
  focus:outline-${color}-800
  data-disabled:border-${color}-200
`;

const inputBlockSizeStyle: { [key in InputBlockSize]: string } = {
  lg: `
    h-14
  `,
  md: `
    h-12
  `,
  sm: `
    h-10
  `,
};

type InputProps = HeadlessuiInputProps & {
  blockSize?: InputBlockSize;
  isError?: boolean;
};

const Input = ({
  blockSize = "md",
  isError = false,
  className,
  ...props
}: InputProps) => {
  return (
    <HeadlessuiInput
      className={`${inputBaseStyle(isError ? "carmine" : "primary")} ${
        inputBlockSizeStyle[blockSize]
      } ${className ?? ""}`}
      {...props}
    />
  );
};

export { Input, type InputProps };
