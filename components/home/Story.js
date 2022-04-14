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

import { APP_ICONS } from "../../context/settings";
import { dataset } from "../../context/settings";

export const Story = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView horizontal>
        {dataset.map((story, index) => (
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
              source={{ uri: story.image }}
              style={{ width: 70, height: 70, borderRadius: 50, margin: 10 }}
            />
            <Text style={{ color: "white" }}>{story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#111",
    padding: 30
  },
  text: {
    color: "white",
    fontSize: 28
  }
});
