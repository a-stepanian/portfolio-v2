import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  isDarkMode: boolean;
  bgColor: string;
  hexBorderColor: string;
  hoverColor: string;
  textColor: string;
  textColorMuted: string;
  panelBg: string;
  hexagonOutline: string;
  glowColor: string;
  iconGlow: string;
  iconColor: string;
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
    bgColor: "#000000",
    hexBorderColor: "#71e4ea",
    hoverColor: "#000000",
    textColor: "#71e4ea",
    textColorMuted: "#71e4ea",
    panelBg: "#081011",
    hexagonOutline: "#71e4ea",
    glowColor: "#71e4ea",
    iconGlow: "#71e4ea",
    iconColor: "#71e4ea",
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
