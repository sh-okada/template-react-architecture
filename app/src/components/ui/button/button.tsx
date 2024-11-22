import { Button as HeadlessuiButton } from "@headlessui/react";
import React from "react";

type ButtonVariant = "fill" | "outline";
type ButtonSize = "lg" | "md" | "sm" | "xs";

const buttonBaseStyle = `
p-2
rounded
`;

const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  fill: `
  bg-primary-500
  text-primary-50
  hover:bg-primary-600
  hover:underline
  active:bg-primary-700
  active:underline
  data-disabled:bg-primary-100
  data-disabled:text-primary-400
  `,
  outline: `
  border
  border-primary-600
  text-primary-600
  hover:border-primary-700
  hover:text-primary-700
  hover:underline  
  active:border-primary-800
  active:text-primary-800
  active:underline
  data-disabled:border-primary-200
  data-disabled:text-primary-200
  `,
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({ className, variant = "fill", ...props }: ButtonProps) => {
  return (
    <HeadlessuiButton
      className={`${buttonBaseStyle} ${buttonVariantStyle[variant]} ${
        className ?? ""
      }`}
      {...props}
    />
  );
};

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
