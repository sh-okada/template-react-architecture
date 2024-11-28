type HelperTextProps = React.ComponentProps<"p">;

const HelperText = ({ className, ...props }: HelperTextProps) => {
  return <p className={`text-xs ${className ?? ""}`} {...props} />;
};

export { HelperText, type HelperTextProps };
