import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList
} from "react-native";

export const HomeStoryPost = ({ item, index }) => {
  return (
    <>
      <View style={styles.StoryOutline}>
        <View style={styles.Story}>
          <Image
            source={{ uri: item.image }}
            key={index}
            style={styles.storyImage}
          />
          <Text style={styles.storyImageText}>{item.username}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  StoryOutline: {
    padding: 10,
    backgroundColor: "white"
  },
  storyImage: {
    width: 73,
    height: 73,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "gray"
  },
  storyImageText: {
    marginTop: 12,
    color: "#000",
    letterSpacing: 1,
    fontSize: 11
  }
});
