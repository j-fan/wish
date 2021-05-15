import React, { FunctionComponent, KeyboardEventHandler } from "react";
import styled from "styled-components";
import { fontFamily, ThemeColours } from "../globalStyles";
import { Button } from "./Button";

const InputContainer = styled.div`
  height: 50px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(121, 198, 198, 1) 35%,
    rgba(231, 176, 232, 1) 73%,
    rgba(142, 128, 236, 1) 100%
  );
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledInput = styled.input`
  ${fontFamily}
  color: ${ThemeColours.black75};
  text-align: right;
  padding: 20px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: ${ThemeColours.black50};
  }
`;

type TextInputProps = {
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (newValue: string) => void;
  onEnter?: (value: string) => void;
  buttonText: string;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  value,
  onChange,
  onEnter,
  buttonText,
  ...props
}) => {
  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onEnter?.(value);
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        onChange={(e) => {
          onChange?.(e.currentTarget.value);
        }}
        onKeyPress={handleEnter}
        {...props}
      />
      <Button
        onClick={() => {
          onEnter?.(value);
        }}
      >
        {buttonText}
      </Button>
    </InputContainer>
  );
};

export { TextInput };
