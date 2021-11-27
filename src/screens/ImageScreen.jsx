import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const data = [
    { title: "Image Title#1", image: "forest.jpg" },
    { title: "Image Title#2", image: "mountain.jpg" },
    { title: "Image Title#3", image: "beach.jpg" },
  ];
  return (
    <View>
      <Text>Image Screen</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(element) => element.title}
        renderItem={({ item }) => {
          return <ImageDetail title={item.title} image={require(`../../assets/beach.jpg`)} />;
        }}
      /> */}
      <ImageDetail title={data[0].title} image={require(`../../assets/forest.jpg`)} />
      <ImageDetail title={data[1].title} image={require(`../../assets/mountain.jpg`)} />
      <ImageDetail title={data[2].title} image={require(`../../assets/beach.jpg`)} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
