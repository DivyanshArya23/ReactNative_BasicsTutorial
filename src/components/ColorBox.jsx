import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ColorBox = ({ color = "#ffaaaa", height=50, width=50, style = {} }) => {
  const boxStyle = {
    backgroundColor: color,
    height: height,
    width: width,
  };
  return <View style={{ ...boxStyle, ...style }} />;
};

export default ColorBox;

const styles = StyleSheet.create({});
