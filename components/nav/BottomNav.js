import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar
} from "react-native";
import { APP_ICONS, APP_PAGES } from "../../context/settings";

import { AntDesign, Entypo } from "react-native-vector-icons";

import { AppContext } from "../../context/AppProvider";

const screenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export const BottomNav = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  return (
    <>
      <View style={styles.bottomNav}>
        <Text>
          {navPage === APP_PAGES.INSTAGRAM.HOME ? (
            <AntDesign
              name="home"
              style={{
                fontSize: 28,
                color: "#0984e3"
              }}
            />
          ) : (
            <AntDesign
              name="home"
              style={{
                fontSize: 28,
                color: "#000"
              }}
            />
          )}
        </Text>
        <Text>
          {navPage === APP_PAGES.INSTAGRAM.SEARCH ? (
            <AntDesign
              name="search1"
              style={{
                fontSize: 28,
                color: "#0984e3"
              }}
            />
          ) : (
            <AntDesign
              name="search1"
              style={{
                fontSize: 28,
                color: "#000"
              }}
            />
          )}
        </Text>
        <Text>
          {navPage === APP_PAGES.INSTAGRAM.LIKEDSECTION ? (
            <Entypo
              name="heart-outlined"
              style={{
                fontSize: 28,
                color: "#0984e3"
              }}
            />
          ) : (
            <Entypo
              name="heart-outlined"
              style={{
                fontSize: 28,
                color: "#000"
              }}
            />
          )}
        </Text>
        <Text>{APP_ICONS.DEFAULTPROFILEPICTURE}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    // top: windowHeight / 1.51,
    backgroundColor: "#ededed",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 1,
    borderColor: "#000"
  }
});
