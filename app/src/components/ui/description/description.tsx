import {
  Description as HeadlessuiDescription,
  DescriptionProps as HeadlessuiDescriptionProps,
} from "@headlessui/react";

type DescriptionProps = HeadlessuiDescriptionProps;

const Description = ({ ...props }: DescriptionProps) => {
  return <HeadlessuiDescription {...props} />;
};

export { Description, type DescriptionProps };
