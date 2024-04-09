import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

const GoalRender = (props) => {
  return (
    <Pressable
      style={styles.goalContainers}
      onPress={props.deleteItemFunction.bind(this, props.id)}
    >
      <Text style={styles.goalText}> {props.itemData.item.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.1,
  },
  goalContainers: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    backgroundColor: "#007AFF",
    width: "100%",
    marginBottom: 10,
    fontSize: 15,
    padding: 10,
  },
  goalText: {
    color: "white",
  },
});

export default GoalRender;
