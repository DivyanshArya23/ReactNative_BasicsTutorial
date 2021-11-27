import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ColorBox = ({ color='#ffaaaa', height, width }) => {
  const boxStyle = {
    backgroundColor: color,
    height: height,
    width: width,
  };
  return <View style={boxStyle} />;
};

export default ColorBox;

const styles = StyleSheet.create({});
