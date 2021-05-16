import React, { FunctionComponent, useEffect, useState } from "react";
import { ScreenLayout } from "../components/ScreenLayout";
import { Screens, useScreen } from "../state/ScreenContext";
import { Wish, wishesCollecionName, getDb, setupDb } from "../firebase/setup";
import styled from "styled-components";
import { device } from "../globalStyles";

const THIS_SCREEN = Screens.VIEW_WISHES;

const WishesContainer = styled.div`
  width: 100%;
  padding: 20px;
  word-wrap: break-word;
  box-sizing: border-box;

  @media ${device.tablet} {
    max-width: 80%;
  }
`;

const ViewWishes: FunctionComponent = () => {
  const { currentScreen } = useScreen();
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    setupDb();
    const db = getDb();

    const handleWishChanges = (snapshot: any) => {
      const changes = snapshot.docChanges();

      const newWishes: Wish[] = [];
      const removeIds: string[] = [];
      changes.forEach((change: any) => {
        if (change.type === "added") {
          newWishes.push({ id: change.doc.id, value: change.doc.data().value });
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

    const query = db.collection(wishesCollecionName);
    const unsubscribe = query.onSnapshot(handleWishChanges, (err) =>
      console.error(err)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ScreenLayout isActive={currentScreen === THIS_SCREEN}>
      <WishesContainer>
        <h1>View wishes</h1>
        <ul>
          {wishes.map((wish: Wish) => (
            <li key={wish.id}>{wish.value}</li>
          ))}
        </ul>
      </WishesContainer>
    </ScreenLayout>
  );
};

export { ViewWishes };
