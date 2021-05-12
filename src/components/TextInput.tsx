import React, { FunctionComponent, KeyboardEventHandler } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: blue;
`;

type TextInputProps = {
  name: string;
  value?: string;
  disabled?: boolean;
  onChange?: (newValue: string) => void;
  onEnter?: (value: string) => void;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  onChange,
  onEnter,
  ...props
}) => {
  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onEnter?.(event.currentTarget.value);
    }
  };

  return (
    <StyledInput
      type="text"
      onChange={(e) => {
        onChange?.(e.currentTarget.value);
      }}
      onKeyPress={handleEnter}
      {...props}
    />
  );
};

export { TextInput };
