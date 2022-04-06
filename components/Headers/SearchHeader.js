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
import { Input } from "../Inputs/Input";

export const SearchHeader = () => {
  return (
    <>
      <Input type="search" placeholder="Search" style={styles.SearchInput} />
    </>
  );
};

const styles = StyleSheet.create({
  SearchInput: {
    padding: 10
  }
});
