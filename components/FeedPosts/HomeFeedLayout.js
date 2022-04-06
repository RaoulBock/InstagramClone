import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import { APP_ICONS } from "../../context/settings";

const Height = Dimensions.get("window").height;

export const HomeFeedLayout = ({ item, index }) => {
  return (
    <>
      <View style={styles.HomeFeedLayout}>
        <View style={styles.HomeFeedLayoutHeader}>
          <View style={styles.HomeFeedLayoutHeaderUserArea}>
            <Image
              source={{ uri: item.image }}
              key={index}
              style={styles.ProfileImage}
            />
            <View>
              <Text style={styles.HomeFeedLayoutHeaderText}>
                {item.username}
              </Text>
              <Text style={styles.HomeFeedLayoutHeaderText}>
                {item.uploadedTime}
              </Text>
            </View>
          </View>
          <Text>{APP_ICONS.VERTICALDOTS}</Text>
        </View>
        <View style={styles.HomeFeedLayoutBody}>
          <Image
            source={{ uri: item.image }}
            key={index}
            style={styles.HomeFeedLayoutContentImage}
          />
        </View>
        <View style={styles.HomeFeedLayoutBottomBar}>
          <View style={styles.HomeFeedLayoutBottomBarLeft}>
            <TouchableOpacity>{APP_ICONS.HEART}</TouchableOpacity>
            <TouchableOpacity>{APP_ICONS.MESSAGE}</TouchableOpacity>
            <TouchableOpacity>{APP_ICONS.SHARE}</TouchableOpacity>
          </View>

          <TouchableOpacity>{APP_ICONS.BOOKMARK}</TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HomeFeedLayout: {
    padding: 1,
    borderRadius: 8,
    marginBottom: 12,
    marginTop: 10
  },
  ProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  HomeFeedLayoutHeaderUserArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4
  },
  HomeFeedLayoutHeaderText: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14,
    color: "gray"
  },
  HomeFeedLayoutHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  HomeFeedLayoutContentImage: {
    width: "100%",
    height: Height / 2,
    marginTop: 12
  },
  HomeFeedLayoutBottomBar: {
    marginLeft: 10,
    marginTop: 2
  },
  HomeFeedLayoutBottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  HomeFeedLayoutBottomBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150
  }
});
