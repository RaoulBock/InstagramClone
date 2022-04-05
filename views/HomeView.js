import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { HomeHeader } from "../components/Headers/HomeHeader";

export const HomeView = () => {
  const [isFollowing, setIsFollowing] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        {isFollowing ? (
          <View>
            <Text>Starting following your friends or your favroute artist</Text>
          </View>
        ) : (
          <View>
            <Text>HomeView</Text>
            <HomeHeader />
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
  }
});
