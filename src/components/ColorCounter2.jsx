import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ColorCounter2 = ({ color, counter, dispatch, jumpValue = 1 }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`+ ${color}`}
        onPress={() => {
          dispatch({ colorToChange: color.toLowerCase(), amount: jumpValue });
        }}
      />
      <Button
        title={`- ${color}`}
        onPress={() => {
          dispatch({
            colorToChange: color.toLowerCase(),
            amount: -1 * jumpValue,
          });
        }}
      />
    </View>
  );
};

export default ColorCounter2;

const styles = StyleSheet.create({});
