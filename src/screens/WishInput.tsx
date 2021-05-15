import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { en } from "naughty-words";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { TextInput } from "../components/TextInput";
import { wishesCollecionName, setupDb, getDb } from "../firebase/setup";
import { device, Glow } from "../globalStyles";

const THIS_SCREEN = Screens.WISH_INPUT;
const WISH_LENGTH_LIMIT = 280;

const WishInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 65px auto;

  @media ${device.tablet} {
    width: 70%;
    grid-template-columns: 150px auto;
  }
`;

const DividingLines = styled.div`
  border-top: 1px solid white;
  height: 0px;
  width: 100%;
  margin: 10px 0 10px;
  ${Glow};

  @media ${device.tablet} {
    height: 25px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    margin: 10px 0 25px;
  }
`;

const Label = styled.div`
  font-size: 24px;
  margin-left: 10px;
  ${Glow};

  @media ${device.tablet} {
    margin-left: 20px;
    font-size: 36px;
  }
`;

const RightColumn = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ScaledImg = styled.img`
  max-width: 100%;
  min-width: 100%;
  object-fit: contain;
  ${Glow};
`;

const naughtyRe = new RegExp(en.join("|"));

const WishInput: FunctionComponent = () => {
  const { currentScreen, setCurrentScreen } = useScreen();
  const [wishText, setWishText] = useState("");
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    setupDb();
  });

  const submitWish = () => {
    if (wishText && !wishText.match(en.join("|"))) {
      getDb().collection(wishesCollecionName).add({ value: wishText });
      if (!cookies.hasMadeWish) {
        setCookie("hasMadeWish", true);
      }

      setCurrentScreen(Screens.VIEW_WISHES);
    }
  };

  const handleOnChange = (newValue: string) => {
    if (newValue.length < WISH_LENGTH_LIMIT) {
      setWishText(newValue);
    }
  };

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <WishInputContainer>
        <RightColumn>
          <ScaledImg src="img/star_arch.png" />
        </RightColumn>
        <LeftColumn>
          <Label>make your wish...</Label>
          <DividingLines />
          <TextInput
            name="wish"
            value={wishText}
            onChange={handleOnChange}
            onEnter={(value) => {
              setWishText(value);
              submitWish();
            }}
            placeholder="I wish for..."
            buttonText="Submit"
            onFocus={() => {
              if (!wishText) {
                setWishText("I wish ");
              }
            }}
          />
        </LeftColumn>
      </WishInputContainer>
    </ScreenLayout>
  );
};

export { WishInput };
