import React, { FunctionComponent, useState } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { TextInput } from "../components/TextInput";
import styled from "styled-components";
import { Button } from "../components/Button";

const THIS_SCREEN = Screens.WISH_INPUT;

const InputsContainer = styled.div`
  display: flex;
`;

const WishInput: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();
  const [wishText, setWishText] = useState("");

  const submitWish = () => {
    if (wishText) {
      setCurrentScreen(Screens.VIEW_WISHES);
    }
  };

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <h1>Make a wish!</h1>
      <InputsContainer>
        <TextInput
          name="wish"
          value={wishText}
          onChange={setWishText}
          onEnter={(value) => {
            setWishText(value);
            submitWish();
          }}
        />
        <Button onClick={submitWish}>Enter</Button>
      </InputsContainer>
    </ScreenLayout>
  );
};

export { WishInput };
