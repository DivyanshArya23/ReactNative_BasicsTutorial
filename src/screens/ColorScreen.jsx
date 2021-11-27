import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

const ColorScreen = () => {
  const [boxArray, setBoxArray] = useState([]);

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  function addColor(color) {
    setBoxArray([...boxArray, color]);
  }
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          addColor(getRandomColor());
        }}
      />
      <Text>ColorScreen</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={boxArray}
        renderItem={({ item, index }) => {
          console.log(item);
          return <Text style={{ backgroundColor: item, ...styles.colorBox }} />;
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  colorBox: {
    // backgroundColor: "#00ff00",
    height: 50,
    width: 50,
  },
});
