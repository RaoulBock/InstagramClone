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
      <View className="container">
        <SafeAreaView>
          <View className="CenterContent">
            {navPage === APP_PAGES.INSTAGRAM.LOGIN && <LoginView />}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

export default App;
