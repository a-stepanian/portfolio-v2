import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  isDarkMode: boolean;
  blackColor: string;
  primaryColor: string;
  panelBg: string;
  panel2Bg: string;
  threeDimensionsBackground: string;
  threeDimensionsBorder: string;
  threeDimensionsOpacity: string;
}

export type TButtonText = "portfolio" | "background" | "contact" | "another" | "";

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
    isDarkMode: true,
    primaryColor: "#71e4ea",
    blackColor: "#000000",
    panelBg: "#081011",
    panel2Bg: "#8ed9dd",
    threeDimensionsBackground: "#71e4ea1e",
    threeDimensionsBorder: "#71e4ea",
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
