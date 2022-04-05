import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList
} from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { HomeStoryPost } from "../components/FeedPosts/HomeStoryPost";
import { HomeHeader } from "../components/Headers/HomeHeader";
import { BottomNav } from "../components/nav/BottomNav";

import { users } from "../context/settings";

export const HomeView = () => {
  const [isFollowing, setIsFollowing] = React.useState(users);
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        {isFollowing.length > 0 ? (
          <>
            <View>
              <HomeHeader />
            </View>
            <View style={styles.bodyContainer}>
              <View style={styles.feedBody}>
                <FlatList
                  data={users}
                  keyExtractor={(item, index) => "key" + index}
                  renderItem={({ item }) => {
                    return <HomeStoryPost item={item} />;
                  }}
                />
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <BottomNav />
            </View>
          </>
        ) : (
          <>
            <View>
              <HomeHeader />
            </View>
            <View style={styles.bodyContainer}>
              <View style={styles.feedBody}>
                <Text>Feed is Empty</Text>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <BottomNav />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: "10%",
    alignItems: "center"
  },
  bodyContainer: {
    backgroundColor: "#eee",
    width: "100%",
    height: "80%"
  },
  feedBody: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
