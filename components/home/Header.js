import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

import { APP_ICONS } from "../../context/settings";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 10
        }}
      >
        <Text style={styles.text}>Instagram</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            {APP_ICONS.PLUS}
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            {APP_ICONS.CAMERA}
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            {APP_ICONS.MESSAGE}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#111",
    padding: 20
  },
  text: {
    color: "white",
    fontSize: 28
  }
});
