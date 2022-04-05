import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export const LoginView = () => {
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        <View>
          <Text>LoginView</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: 50
  }
});
