import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  blackColor: string;
  primaryColor: string;
  panelBg: string;
  panel2Bg: string;
  hexagonOutlineColor: string;
  threeDimensionsBackground: string;
  threeDimensionsOpacity: string;
}

export type TButtonText = "portfolio" | "background" | "contact" | "";

interface IAppState {
  btnClicked: TButtonText;
  colorScheme: IColorScheme;
  updateBtnClicked: (info: TButtonText) => void;
  updateColorScheme: (info: IColorScheme) => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<IAppState | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [btnClicked, setBtnClicked] = useState<TButtonText>("");
  // const [colorScheme, setColorScheme] = useState<IColorScheme>({
  //   blackColor: "#000000",
  //   panelBg: "#282A3A",
  //   primaryColor: "#8ecae6",
  //   hexagonOutlineColor: "#735F32",
  //   panel2Bg: "#735F32",
  //   threeDimensionsBackground: "#a4aef73b",
  //   threeDimensionsOpacity: "0"
  // });
  const [colorScheme, setColorScheme] = useState<IColorScheme>({
    blackColor: "#302232",
    panelBg: "#fff",
    primaryColor: "#fcbf49",
    hexagonOutlineColor: "#edf2f4",
    panel2Bg: "#086375",
    threeDimensionsBackground: "#80b5d23a",
    threeDimensionsOpacity: "0"
  });

  const updateBtnClicked = (info: TButtonText) => setBtnClicked(info);
  const updateColorScheme = (info: IColorScheme) => setColorScheme(info);

  const contextValue: IAppState = {
    btnClicked,
    colorScheme,
    updateBtnClicked,
    updateColorScheme
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
