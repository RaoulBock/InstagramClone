import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.DefaultInput}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  DefaultInput: {
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fafafa",
    width: 300,
    fontWeight: "500"
  }
});
