import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { wishesCollecionName, setupDb, getDb } from "../firebase/setup";

const THIS_SCREEN = Screens.WISH_INPUT;

const InputsContainer = styled.div`
  display: flex;
`;

const WishInput: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();
  const [wishText, setWishText] = useState("");
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    setupDb();
  });

  const submitWish = () => {
    if (wishText) {
      getDb().collection(wishesCollecionName).add({value: wishText});
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
        />
        <Button onClick={submitWish}>Enter</Button>
      </InputsContainer>
    </ScreenLayout>
  );
};

export { WishInput };
