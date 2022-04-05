import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { HomeHeader } from "../components/Headers/HomeHeader";
import { BottomNav } from "../components/nav/BottomNav";

export const HomeView = () => {
  const [isFollowing, setIsFollowing] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        {!isFollowing ? (
          <>
            <View>
              <HomeHeader />
            </View>
            <View style={styles.bodyContainer}>
              <Text>Let's get you started</Text>
            </View>
            <View style={{ width: "100%" }}>
              <BottomNav />
            </View>
          </>
        ) : (
          <View>
            <HomeHeader />
            <Text>HomeView</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: "10%",
    alignItems: "center"
  },
  bodyContainer: {
    backgroundColor: "red",
    width: "100%",
    height: "80%"
  }
});
