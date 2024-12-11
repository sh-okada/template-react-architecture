import { Link as RouterLink, LinkProps } from "react-router";

const linkStyle = `
  text-base
  underline
  underline-offset-4
  text-primary-600
  hover:text-primary-700
`;

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={`${linkStyle} ${className ?? ""}`} {...props}>
      {children}
    </RouterLink>
  );
};

export { Link };
