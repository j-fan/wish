import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";

enum Screens {
  LANDING_SCREEN = "landing screen",
  WISH_INPUT = "wish input",
  VIEW_WISHES = "view wishes",
  ABOUT = "about",
}

type ScreenContextProps = {
  currentScreen: Screens;
  isLoading: boolean;
  setCurrentScreen?: (screen: Screens) => void;
  setIsLoading?: (isLoading: boolean) => void;
};

const defaultScreenContext: ScreenContextProps = {
  currentScreen: Screens.LANDING_SCREEN,
  isLoading: true,
};

const ScreenContext = createContext<ScreenContextProps>(defaultScreenContext);

const ScreenContextProvider: FunctionComponent = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(
    defaultScreenContext.currentScreen
  );
  const [isLoading, setIsLoading] = useState(defaultScreenContext.isLoading);

  return (
    <ScreenContext.Provider
      value={{ currentScreen, isLoading, setCurrentScreen, setIsLoading }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

const ScreenContextConsumer = ScreenContext.Consumer;

const useScreen = (): ScreenContextProps => {
  const context = useContext(ScreenContext);
  return context;
};

export {
  ScreenContextProvider,
  ScreenContextConsumer,
  useScreen,
  defaultScreenContext,
};
