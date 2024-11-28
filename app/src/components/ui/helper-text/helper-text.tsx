type HelperTextProps = React.ComponentProps<"p"> & {
  invalid?: boolean;
};

const HelperText = ({
  className,
  invalid = false,
  ...props
}: HelperTextProps) => {
  return (
    <p
      className={`text-xs ${invalid ? "text-carmine-600" : ""} ${
        className ?? ""
      }`}
      {...props}
    />
  );
};

export { HelperText, type HelperTextProps };
