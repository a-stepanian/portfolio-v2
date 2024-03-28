import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  blackColor: string;
  primaryColor: string;
  hexagonOutlineColor: string;
  threeDimensionsBackground: string;
  panelRadius: string;
  buttonBorderColor: string;
}

export type TButtonText = "portfolio" | "background" | "contact" | "";

interface IAppState {
  btnClicked: TButtonText;
  emailSent: boolean;
  colorScheme: IColorScheme;
  updateBtnClicked: (info: TButtonText) => void;
  updateEmailSent: (info: boolean) => void;
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
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<IColorScheme>({
    blackColor: "#29222a",
    primaryColor: "#1dd3b0",
    hexagonOutlineColor: "#edf2f4",
    threeDimensionsBackground: "#80b5d23a",
    panelRadius: "3px",
    buttonBorderColor: "#29222a"
  });

  const updateBtnClicked = (info: TButtonText) => setBtnClicked(info);
  const updateEmailSent = (info: boolean) => setEmailSent(info);
  const updateColorScheme = (info: IColorScheme) => setColorScheme(info);

  const contextValue: IAppState = {
    btnClicked,
    emailSent,
    colorScheme,
    updateBtnClicked,
    updateEmailSent,
    updateColorScheme
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
