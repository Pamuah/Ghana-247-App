import React from "react";
import { View, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    justifyContent: "flex-start",
  },
  headContainer: {
    padding: 16,
    backgroundColor: "#27292B",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
