import {
  Label as HeadlessuiLabel,
  LabelProps as HeadlessuiLabelProps,
} from "@headlessui/react";

type LabelProps = HeadlessuiLabelProps;

const Label = ({ className, ...props }: LabelProps) => {
  return <HeadlessuiLabel className={`${className ?? ""}`} {...props} />;
};

export { Label, type LabelProps };
