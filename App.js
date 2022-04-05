import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import AppProvider, { AppContext } from "./context/AppProvider";
import { APP_PAGES } from "./context/settings";
import { LoginView } from "./views/LoginView";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);

  return (
    <>
      <View>
        <View>{navPage === APP_PAGES.INSTAGRAM.LOGIN && <LoginView />}</View>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
