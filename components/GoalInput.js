import React from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  
  return (
    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type your goals..."
        // when the text changes, the function goalInputHandler is executed
        // if i where to add the () at the end of the function,
        // it would be executed immediately when the ui is rendered
        onChangeText={props.goalInputHandler}
      ></TextInput>
      <Pressable style={styles.button} onPress={props.goalHandleFunction}>
        <Text style={{ color: "white" }}>Add goal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#cccccc",
    width: "70%",
  },
  topContainer: {
    flex: 1,
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
    borderRadius: 10,
    backgroundColor: "#007AFF",
    borderWidth: 1,
    borderColor: "#007AFF",
    padding: 10,
    width: "30%",
  },
});

export default GoalInput;
