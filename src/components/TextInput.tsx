import React, {
  ClipboardEventHandler,
  FocusEventHandler,
  FunctionComponent,
  KeyboardEventHandler,
} from "react";
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

const StyledButton = styled(Button)`
  font-size: 20px;
  margin: 4px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  ${fontFamily}
  color: ${ThemeColours.black75};
  text-align: right;
  padding: 20px;
  background: transparent;
  border: none;
  outline: none;
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
  onFocus?: FocusEventHandler<HTMLInputElement>;
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

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
    const pastedValue = e.clipboardData.getData("text/plain");
    onChange?.(pastedValue);
  };

  return (
    <InputContainer>
      <StyledInput
        value={value}
        type="text"
        onChange={(e) => {
          onChange?.(e.currentTarget.value);
        }}
        onKeyPress={handleEnter}
        onPaste={handlePaste}
        {...props}
      />
      <StyledButton
        onClick={() => {
          onEnter?.(value);
        }}
      >
        {buttonText}
      </StyledButton>
    </InputContainer>
  );
};

export { TextInput };
