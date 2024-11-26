type HelperTextProps = React.ComponentProps<"p"> & {
  isError?: boolean;
};

const HelperText = ({
  className,
  isError = false,
  ...props
}: HelperTextProps) => {
  return (
    <p
      className={`text-xs ${isError ? "text-carmine-600" : ""} ${
        className ?? ""
      }`}
      {...props}
    />
  );
};

export { HelperText, type HelperTextProps };
