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
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { HomeFeedLayout } from "../components/FeedPosts/HomeFeedLayout";
import { HomeStoryPost } from "../components/FeedPosts/HomeStoryPost";
import { HomeHeader } from "../components/Headers/HomeHeader";
import { BottomNav } from "../components/nav/BottomNav";

import { users } from "../context/settings";

const Height = Dimensions.get("window").height;

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
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => "key" + index}
                  renderItem={({ item }) => {
                    return <HomeStoryPost item={item} />;
                  }}
                />
              </View>
            </View>
            <View style={styles.HomeFeedContent}>
              <FlatList
                data={users}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => "key" + index}
                renderItem={({ item }) => {
                  return <HomeFeedLayout item={item} />;
                }}
              />
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
    width: "100%",
    height: Height / 6.5
  },
  feedBody: {
    alignItems: "center",
    justifyContent: "center"
    // flex: 1
  },
  HomeFeedContent: {
    backgroundColor: "#eee",
    width: "100%",
    height: Height / 1.53,
    alignItems: "center",
    paddingTop: 12
  }
});
