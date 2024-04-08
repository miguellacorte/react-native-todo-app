import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";

import React, { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
    // console.log("goalinputhandler:", enteredText);
  }

  function addGoalHandler() {
    //best practices on state update is your state depends on the previous state:
    //use a function that receives the current state as an argument
    //and then returns the updated state
    //this is because react schedules state updates and it might not be
    //immediate, so it's better to use the function approach
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,

      { text: enteredGoal, key: Math.random().toString() },
    ]);
    // console.log("goals:", goals);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your goals..."
          // when the text changes, the function goalInputHandler is executed
          // if i where to add the () at the end of the function,
          // it would be executed immediately when the ui is rendered
          onChangeText={goalInputHandler}
        ></TextInput>

        <Pressable style={styles.button} onPress={addGoalHandler}>
          <Text style={{ color: "white" }}>Add goal</Text>
        </Pressable>
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalContainers}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  },

  input: {
    borderRadius: 10,
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#cccccc",
    width: "70%",
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
  bottomContainer: {
    flex: 10,
    margin: 20,
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
