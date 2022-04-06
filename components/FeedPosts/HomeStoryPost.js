import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions
} from "react-native";

const Height = Dimensions.get("window").height;

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
    padding: 6,
    backgroundColor: "white"
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "gray"
  },
  storyImageText: {
    marginTop: 7,
    color: "#000",
    letterSpacing: 1,
    fontSize: 11
  },
  Story: {
    alignItems: "center"
  }
});
