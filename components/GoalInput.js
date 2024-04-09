import { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  View
} from "react-native";


const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
    // console.log("goalinputhandler:", enteredText);
  }

  function addGoalHandler() {
    props.goalHandleFunction(enteredGoal);
    setEnteredGoal("");
  }
  return (
    <View style={styles.topContainer}>
    
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        // when the text changes, the function goalInputHandler is executed
        // if i where to add the () at the end of the function,
        // it would be executed immediately when the ui is rendered
        onChangeText={goalInputHandler}
        value={enteredGoal}
      ></TextInput>
      <Pressable
        onPress={addGoalHandler}
        style={({ pressed }) => (pressed ? styles.pressedItem : styles.button)}
      >
        <Text style={{ color: "white" }}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressedItem: {
    marginBottom: 20,
    opacity: 0.6,
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
  input: {
    flex: 4,
    color: "black",
    borderRadius: 10,
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#cccccc",
    width: "70%",
  },
  topContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomColor: "Black",
    borderBottomWidth: 0.5,
  },
  button: {
    flex: 1,
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
