import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalRender = (props) => {
  return (
    <View style={styles.goalContainers}>
      <Text style={styles.goalText}>{props.itemData.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
