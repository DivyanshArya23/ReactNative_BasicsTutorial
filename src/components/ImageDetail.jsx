import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
