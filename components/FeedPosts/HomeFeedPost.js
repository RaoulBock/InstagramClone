import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList
} from "react-native";

export const HomeFeedPost = ({ item }) => {
  return (
    <>
      <View>
        <Text>{item.id}</Text>
      </View>
    </>
  );
};
