import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { APP_ICONS } from "../../context/settings";

export const BottomNav = () => {
  return (
    <>
      <View style={styles.bottomNav}>
        <Text>{APP_ICONS.HOME}</Text>
        <Text>{APP_ICONS.SEARCH}</Text>
        <Text>{APP_ICONS.HEART}</Text>
        <Text>{APP_ICONS.HOME}</Text>
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
    padding: 10
  }
});
