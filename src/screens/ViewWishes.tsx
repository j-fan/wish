import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { Wish, wishesCollecionName, getDb, setupDb } from "../firebase/setup";
import styled from "styled-components";
import { device, Glow } from "../globalStyles";
import { WishTag } from "../components/WishTag";

const THIS_SCREEN = Screens.VIEW_WISHES;

const WishesContainer = styled.div`
  ${Glow};
  width: 100%;
  height: 100%;
  padding: 100px 0px 20px 0px;
  box-sizing: border-box;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 500px auto;
    padding: 100px 0px 60px 20px;
  }
`;

const TreeImage = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`;

const TreeColumn = styled.div`
  display: none;

  h1 {
    margin: 60px 0px;
    font-size: 42px;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const WishesColumn = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;

  &::after {
    content: "";
    flex: 0 0 20px;
  }

  &::before {
    content: "";
    flex: 0 0 20px;
  }

  & * + * {
    margin-left: 20px;
  }
`;

const ViewWishes: FunctionComponent = () => {
  const { currentScreen } = useScreen();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const wishContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setupDb();
    const db = getDb();

    const handleWishChanges = (snapshot: any) => {
      const changes = snapshot.docChanges();

      const newWishes: Wish[] = [];
      const removeIds: string[] = [];
      changes.forEach((change: any) => {
        if (change.type === "added") {
          newWishes.push({
            id: change.doc.id,
            userId: change.doc.data().userId,
            value: change.doc.data().value,
            timestamp: change.doc.data().timestamp,
          });
        } else if (change.type === "removed") {
          removeIds.push(change.doc.id);
        }
      });
      setWishes((currentWishes) =>
        currentWishes
          .concat(newWishes)
          .filter(({ id }) => !removeIds.includes(id))
      );
    };

    const query = db.collection(wishesCollecionName).orderBy("timestamp");
    const unsubscribe = query.onSnapshot(handleWishChanges, (err) =>
      console.error(err)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (wishContainerRef.current) {
      wishContainerRef.current.scrollTo(0, 0);
    }
  }, [currentScreen]);

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <WishesContainer>
        <TreeColumn>
          <h1>The Wishing Tree</h1>
          <TreeImage src="img/tree.png" />
        </TreeColumn>
        <WishesColumn ref={wishContainerRef}>
          {wishes
            .sort((lhs, rhs) => (lhs.timestamp < rhs.timestamp ? -1 : 1))
            .reverse()
            .map((wish: Wish) => (
              <WishTag key={wish.id}>{wish.value}</WishTag>
            ))}
        </WishesColumn>
      </WishesContainer>
    </ScreenLayout>
  );
};

export { ViewWishes };
