import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList
} from "react-native";

export const HomeStoryPost = ({ item }) => {
  return (
    <>
      <View style={styles.StoryOutline}>
        <View style={styles.Story}>
          <Image source={item.id} style={styles.storyImage} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  StoryOutline: {
    width: 400,
    padding: 10,
    backgroundColor: "white",
    marginTop: 10
  },
  storyImage: {
    width: 300,
    height: 300
  }
});
