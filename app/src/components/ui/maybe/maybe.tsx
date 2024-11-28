type MayBeProps = {
  test: unknown;
  children: React.ReactNode;
};

const Maybe = ({ test, children }: MayBeProps) => {
  return test ? children : null;
};

export { Maybe };
