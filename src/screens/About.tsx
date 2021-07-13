import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "../components/Link";
import { ScreenLayout } from "../components/ScreenLayout";
import { device, Glow, HideScrollBar } from "../globalStyles";
import { Screens, useScreen } from "../state/ScreenContext";

const THIS_SCREEN = Screens.ABOUT;

const ColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 36px;
  max-width: 1000px;
  max-height: 100%;
  overflow-y: scroll;
  ${HideScrollBar};

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  p {
    line-height: 1.5;
    font-size: 18px;
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
              Asian UI design, Super Mario Galaxy, Animal Crossing, Virtual
              Self, and the work of Mai Yamashita and Naoto Kobayashi, this work
              is an attempt to reframe the internet as a method of tracking
              human desires and hopes.
            </p>
            <p>
              When users land on the website, they will be introduced to a
              starry night sky. Occasionally, glowing neon stars will tumble
              through the screen. Users will be prompted by a text box to enter
              their wish. As users type in their wish, sparse and cascading
              piano plays in the background, grounding them in the contemplative
              nature of the experience. When the wish has been submitted, stars
              will begin shooting through the sky, signalling their wish has
              been sent into the aether. In a section called the Wishing Tree,
              users can see wishes of others, displayed anonymously on
              rectangular tags, drawing reference to the custom of tying wishes
              to trees during the Tanabata festival.
            </p>
          </div>
          <div>
            <h1>About the artist</h1>
            <p>
              <Link href="https://www.alvinruiyuanzhong.com/">
                Alvin Ruiyuan Zhong
              </Link>{" "}
              is a Chinese-Australian multidisciplinary artist working across
              illustration, projection art and CGI. His work often invokes
              feelings of nostalgia, wonder and child-like joy or innocence. He
              brings aboard a sense of schoolyard antics into his art-making,
              often blending the aesthetics of hyper-masculine rave culture and
              the saccharine cuteness in kawaii culture to investigate his
              surroundings.
            </p>
            <h1>Acknowledgements</h1>
            <p>
              This work has been commissioned by 4A Centre for Contemporary
              Asian Art, 2021.
            </p>
            <p>
              Concept & Storyboarding: Alvin Zhong
              <br />
              Modelling & Animation: Alvin Zhong &{" "}
              <Link href="https://www.janefan.xyz/">Jane Fan</Link>
              <br />
              Programming:{" "}
              <Link href="https://www.callumhoward.com/">Callum Howard</Link> &
              Jane Fan
              <br />
              Sound: Let is Last by Crowander
              <br />
            </p>
          </div>
        </ColumnLayout>
      </AboutContainer>
    </ScreenLayout>
  );
};

export { About };
