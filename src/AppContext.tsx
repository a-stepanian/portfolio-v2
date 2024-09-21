import React, { createContext, useContext, useState } from "react";

export interface IColorScheme {
  blackColor: string;
  primaryColor: string;
  hexagonOutlineColor: string;
  threeDimensionsBackground: string;
  panelRadius: string;
  buttonBorderColor: string;
  lineWidth: string;
  lineStyle: string;
  infoPanelContentsBackground: string;
  jobInfoTextColor: string;
  siteBg: string;
  formTextColor: string;
  formInputBg: string;
  infoPanelContentsCloseRadius: String;
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
    primaryColor: "#a0a4c5",
    hexagonOutlineColor: "#edf2f4",
    threeDimensionsBackground: "#80b5d23a",
    panelRadius: "4px",
    buttonBorderColor: "#29222a",
    lineWidth: "4px",
    lineStyle: "solid",
    infoPanelContentsBackground: "#eee",
    jobInfoTextColor: "#e8ff94",
    siteBg: "#29222a",
    formTextColor: "#1dd3b0",
    formInputBg: "#3d5752",
    infoPanelContentsCloseRadius: "3px"
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
