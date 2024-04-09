import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
} from "react-native";

import GoalRender from "./components/GoalRender";
import GoalInput from "./components/GoalInput";

import React, { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    //best practices on state update is your state depends on the previous state:
    //use a function that receives the current state as an argument
    //and then returns the updated state
    //this is because react schedules state updates and it might not be
    //immediate, so it's better to use the function approach
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,

      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function deleteLastItem() {
    setGoals((currentCourseGoals) => {
      const newGoals = [...currentCourseGoals]; // create a copy of the current goals
      newGoals.pop(); // remove the last item
      return newGoals; // return the updated array
    });
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalInput goalHandleFunction={addGoalHandler} />

      <View style={styles.bottomContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalRender
                itemData={itemData}
                id={itemData.item.id}
                deleteItemFunction={deleteGoalHandler}
              />
            );
          }}
        ></FlatList>
      </View>

      <Pressable
        android_ripple={{ color: "black" }}
        style={({ pressed }) =>
          pressed ? styles.pressedItem : styles.deleteContainer
        }
        onPress={deleteLastItem}
      >
        <View style={styles.deleteContainerView}>
          <Text style={styles.deleteContainerText}>
            Delete last item in list
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressedItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    opacity: 0.3,
  },
  deleteContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  deleteContainerView: {
    width: "50%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#cccccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteContainerText: {
    color: "black",
  },
  appContainer: {
    flex: 1,
    padding: 10,
  },
  bottomContainer: {
    flex: 10,
    margin: 20,
  },
});
