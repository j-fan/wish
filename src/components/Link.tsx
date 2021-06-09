import React, { FunctionComponent } from "react";

const Link: FunctionComponent<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export { Link };
