import React, { FunctionComponent, useState } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { TextInput } from "../components/TextInput";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { device } from "../globalStyles";

const THIS_SCREEN = Screens.WISH_INPUT;

const InputsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const WishInput: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();
  const [wishText, setWishText] = useState("");
  const [cookies, setCookie] = useCookies();

  const submitWish = () => {
    if (wishText) {
      if (!cookies.hasMadeWish) {
        setCookie("hasMadeWish", true);
      }

      setCurrentScreen(Screens.VIEW_WISHES);
    }
  };

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <h1>Make a wish!</h1>
      {cookies.hasMadeWish ? (
        <p>Looks like you have made a wish before</p>
      ) : (
        <p>Looks like it is your first time making a wish here</p>
      )}
      <InputsContainer>
        <TextInput
          name="wish"
          value={wishText}
          onChange={setWishText}
          onEnter={(value) => {
            setWishText(value);
            submitWish();
          }}
          placeholder="type your wish here"
        />
      </InputsContainer>
    </ScreenLayout>
  );
};

export { WishInput };
