import {
  Field as HeadlessuiField,
  FieldProps as HeadlessuiFieldProps,
} from "@headlessui/react";

type FieldProps = HeadlessuiFieldProps;

const Field = ({ ...props }: FieldProps) => {
  return <HeadlessuiField {...props} />;
};

export { Field, type FieldProps };
