import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import LogoRef from "../../assets/Instagram_logo.svg-removebg-preview.png";
import { APP_ICONS } from "../../context/settings";

export const HomeHeader = () => {
  return (
    <>
      <View style={styles.homeHeader}>
        <Text>{APP_ICONS.CAMERA}</Text>
        <Image
          source={require("../assets/Instagram_logo.svg-removebg-preview.png")}
          style={styles.logo}
        />
        <Text>{APP_ICONS.INBOX}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 200,
    height: 50
  }
});
