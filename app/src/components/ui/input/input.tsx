import {
  Input as HeadlessuiInput,
  InputProps as HeadlessuiInputProps,
} from "@headlessui/react";
import React from "react";
import { Field } from "../field";
import { Label } from "../label";
import { Maybe } from "../maybe";
import { HelperText } from "../helper-text";

type InputBlockSize = "lg" | "md" | "sm";

const inputBaseStyle = `
  rounded-lg
  bg-white
  text-base
  px-4
  py-3
  border
  border-primary-600
  focus:outline-none
  data-[focus]:border-priamry-800
  data-[disabled]:border-priamry-200
  data-[invalid]:border-carmine-600
  data-[invalid]:data-[focus]:border-carmine-800
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
  label?: string;
  helperText?: string;
  blockSize?: InputBlockSize;
  invalid?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      blockSize = "md",
      invalid = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Field className="flex flex-col">
        <Maybe test={label}>
          <Label>{label}</Label>
        </Maybe>
        <HeadlessuiInput
          className={`${inputBaseStyle} ${inputBlockSizeStyle[blockSize]} ${
            className ?? ""
          }`}
          invalid={invalid}
          ref={ref}
          {...props}
        />
        <Maybe test={helperText}>
          <HelperText className={invalid ? "text-carmine-600" : ""}>
            {helperText}
          </HelperText>
        </Maybe>
      </Field>
    );
  }
);

export { Input, type InputProps };
