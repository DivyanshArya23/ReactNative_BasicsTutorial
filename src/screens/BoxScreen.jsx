import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 4,
  },
  textTwoStyle: {
    // flex: 4,
    // alignSelf: "stretch",
    position: "absolute",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
    // right: 0,
    // left: 0,
    // top: 0,
    // bottom: 0,
    // height: "100%",
    // width: "100%",
    borderWidth: 3,
    borderColor: "red",
  },
  textThreeStyle: {
    // flex: 2,
    borderWidth: 3,
    borderColor: "red",
  },
});
