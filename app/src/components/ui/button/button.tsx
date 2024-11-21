import { Button as HeadlessuiButton } from "@headlessui/react";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: ButtonProps) => {
  return <HeadlessuiButton {...props} />;
};

export { Button, type ButtonProps };
