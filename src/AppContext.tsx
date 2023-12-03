import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  isDarkMode: boolean;
  bgColor: string;
  hexBorderColor: string;
  textColor: string;
}

interface IAppState {
  btnClicked: "Portfolio" | "Background" | "Contact" | "";
  colorScheme: IColorScheme;
  updateBtnClicked: (info: "Portfolio" | "Background" | "Contact" | "") => void;
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
  const [btnClicked, setBtnClicked] = useState<
    "Portfolio" | "Background" | "Contact" | ""
  >("");
  const [colorScheme, setColorScheme] = useState<IColorScheme>({
    isDarkMode: true,
    bgColor: "#111",
    hexBorderColor: "#555",
    textColor: "7ffff2",
  });

  const updateBtnClicked = (
    info: "Portfolio" | "Background" | "Contact" | ""
  ) => setBtnClicked(info);
  const updateColorScheme = (info: IColorScheme) => setColorScheme(info);

  const contextValue: IAppState = {
    btnClicked,
    colorScheme,
    updateBtnClicked,
    updateColorScheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
