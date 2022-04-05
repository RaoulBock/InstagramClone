import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
  userName: "",
  setUserName: (val) => {},
  password: "",
  setPassword: (val) => {},
  phoneNumber: "",
  setPhoneNumber: (val) => {},
  fullName: "",
  setFullName: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.INSTAGRAM.LOGIN);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [fullName, setFullName] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        userName,
        setUserName,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        fullName,
        setFullName
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
