import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Text Screen</Text>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Text>My Name is : {name}</Text>
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
