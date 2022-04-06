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
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import { users } from "../../context/settings";
import { HomeStoryPost } from "./HomeStoryPost";

const Height = Dimensions.get("window").height;

export const HomeFeedLayout = ({ item, index }) => {
  return (
    <>
      <View style={styles.HomeFeedLayout}>
        <View style={styles.bodyContainer}>
          <View style={styles.feedBody}>
            <FlatList
              data={users}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item }) => {
                return <HomeStoryPost item={item} />;
              }}
            />
          </View>
        </View>
        <View style={styles.HomeFeedLayoutHeader}>
          <View style={styles.HomeFeedLayoutHeaderUserArea}>
            <Image
              source={{ uri: item.image }}
              key={index}
              style={styles.ProfileImage}
            />
            <Text style={styles.HomeFeedLayoutHeaderText}>{item.username}</Text>
          </View>
          <Text style={styles.HomeFeedLayoutHeaderText}>
            {item.uploadedTime}
          </Text>
        </View>
        <View style={styles.HomeFeedLayoutBody}>
          <Image
            source={{ uri: item.image }}
            key={index}
            style={styles.HomeFeedLayoutContentImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HomeFeedLayout: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    marginBottom: 12
  },
  ProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  HomeFeedLayoutHeaderUserArea: {
    flexDirection: "row",
    alignItems: "center"
  },
  HomeFeedLayoutHeaderText: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 15,
    color: "gray"
  },
  HomeFeedLayoutHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  HomeFeedLayoutContentImage: {
    width: "100%",
    height: Height / 1.7,
    marginTop: 12
  }
});
