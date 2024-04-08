import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";

import GoalRender from "./components/GoalRender";
import GoalInput from "./components/GoalInput";

import React, { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

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
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalInput
        goalHandleFunction={addGoalHandler}
        goalInputHandler={goalInputHandler}
      />

      <View style={styles.bottomContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalRender itemData={itemData} />;
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
  bottomContainer: {
    flex: 10,
    margin: 20,
  },
});
