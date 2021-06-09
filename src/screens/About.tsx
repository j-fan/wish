import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ScreenLayout } from "../components/ScreenLayout";
import { device, Glow } from "../globalStyles";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.ABOUT;

const ColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 36px;
  max-width: 800px;
  max-height: 100%;
  overflow-y: scroll;

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }

  p {
    line-height: 1.5;
  }

  h1 {
    ${Glow};
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 30px 30px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const About: FunctionComponent = () => {
  const { currentScreen } = useScreen();

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <AboutContainer>
        <ColumnLayout>
          <div>
            <h1>About this artwork</h1>
            <p>
              Wish is an interactive audiovisual website which emulates the
              experiences of yearning for honesty, earnestness and intimacy on
              the internet. This artwork acts a response to Marcus Whale’s and
              Craig Stubb-Race’s “Optic”; where their work explores the ideas of
              identity and self discovery through screens as a slick, highly
              sensual experience, Wish is a hopeful dissection of the internet
              as a tool for expressing one’s self through vulnerability and
              tenderness. Drawing influences from early 2000’s tech aesthetics,
              Asian UI design, DDR, Virtual Self, and the work of Mai Yamashita
              and Naoto Kobayashi, this work is an attempt to reframe the
              internet as a method of tracking human desires and hopes.
            </p>
            <p>
              When users land on the website, they will be introduced to a
              starry night sky. Occasionally, glowing neon stars will tumble
              through the screen. Users will be prompted by a text box to enter
              their wish. Each letter typed will trigger hushed keys and tones,
              echoing the intimate nature of their wish. When the wish has been
              submitted, a special star will fall from the sky, just for them,
              leaving just as quickly as it came. In a section called the
              Wishing Tree, users can see wishes of others, displayed
              anonymously on rectangular tags, drawing reference to the custom
              of tying wishes to trees during the Tanabata festival.
            </p>
          </div>
          <div>
            <h1>About the artist</h1>
            <p>
              Alvin Ruiyuan Zhong is a Chinese-Australian multidisciplinary
              artist working across illustration, projection art and CGI. His
              work often invokes feelings of nostalgia, wonder and child-like
              joy or innocence. He brings aboard a sense of schoolyard antics
              into his art-making, often blending the aesthetics of
              hyper-masculine rave culture and the saccharine cuteness in kawaii
              culture to investigate his surroundings.
            </p>
            <h1>Acknowledgements</h1>
            <p>
              Concept & Storyboarding: Alvin Zhong
              <br />
              Modelling & Animation: Alvin Zhong & Jane Fan
              <br />
              Programming: Callum Howard & Jane Fan
              <br />
              Sound: Alvin Zhong & Callum Howard
              <br />
            </p>
          </div>
        </ColumnLayout>
      </AboutContainer>
    </ScreenLayout>
  );
};

export { About };
