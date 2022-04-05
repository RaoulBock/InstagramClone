import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = (props) => {
  return (
    <TouchableOpacity style={styles.defaultButton} onPress={props.onPress}>
      <Text style={styles.defaultButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#74b9ff",
    width: 300,
    fontWeight: "500"
  },
  defaultButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
});
