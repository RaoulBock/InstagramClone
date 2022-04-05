import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { ProfileHeader } from "../components/Headers/ProfileHeader";

export const ProfileView = () => {
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        {isFollowing ? (
          <View>
            <ProfileHeader />
            <Text>Starting following your friends or your favroute artist</Text>
          </View>
        ) : (
          <View>
            <ProfileHeader />
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
  }
});
