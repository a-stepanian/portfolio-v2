import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  blackColor: string;
  primaryColor: string;
  panelBg: string;
  panel2Bg: string;
  hexagonOutlineColor: string;
  threeDimensionsBackground: string;
  threeDimensionsBorder: string;
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
  const [colorScheme, setColorScheme] = useState<IColorScheme>({
    blackColor: "#111",
    panelBg: "#222",
    primaryColor: "#ff8192",
    hexagonOutlineColor: "#e4abb2",
    panel2Bg: "#a3b9ba",
    threeDimensionsBackground: "#2fd5ca1e",
    threeDimensionsBorder: "#9fe1cd",
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
