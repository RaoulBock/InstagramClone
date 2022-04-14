import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { APP_ICONS, dataset } from "../../../context/settings";

export const PostHeader = () => {
  return (
    <ScrollView>
      <View style={{ margin: 10, marginTop: 20 }}>
        {dataset.map((story, index) => (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: story.image }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    margin: 10
                  }}
                />
                <Text style={{ color: "white" }}>{story.name}</Text>
              </View>
              <TouchableOpacity>{APP_ICONS.VERTICALDOTS}</TouchableOpacity>
            </View>
          </>
        ))}
      </View>
    </ScrollView>
  );
};
