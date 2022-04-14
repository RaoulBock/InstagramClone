import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Header } from "../components/home/Header";
import { Story } from "../components/home/Story";

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
    </View>
  );
};
const styles = StyleSheet.create({
  HomeScreen: {}
});
