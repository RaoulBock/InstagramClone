import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
  userName: "",
  setUserName: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.INSTAGRAM.LOGIN);
  const [userName, setUserName] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        userName,
        setUserName
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
