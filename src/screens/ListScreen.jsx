import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 20 },
    { name: "Friend #3", age: 20 },
    { name: "Friend #4", age: 20 },
    { name: "Friend #5", age: 20 },
    { name: "Friend #6", age: 20 },
    { name: "Friend #7", age: 20 },
    { name: "Friend #8", age: 20 },
  ];
  return (
    <FlatList
      keyExtractor={(element) => element.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.listItem}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 50,
  },
});
