import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { APP_ICONS } from "../../context/settings";

export const ProfileHeader = () => {
  return (
    <>
      <View style={styles.homeHeader}>
        <Text>{APP_ICONS.LEFTARROW}</Text>
        <Image
          source={require("../../assets/Instagram_logo.svg-removebg-preview.png")}
          style={styles.logo}
        />
        <Text>{APP_ICONS.VERTICALDOTS}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          width: "90%",
          alignItems: "center"
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  logo: {
    width: 200,
    height: 50
  }
});
