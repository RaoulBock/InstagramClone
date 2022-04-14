import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { Header } from "../components/home/Header";
import { PostHeader } from "../components/home/post/PostHeader";
import { Story } from "../components/home/Story";

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
      <PostHeader />
    </View>
  );
};
const styles = StyleSheet.create({
  HomeScreen: {}
});
