import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <Text>Text Screen</Text>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
