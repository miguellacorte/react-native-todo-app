import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.goalContainer}>
        <TextInput
          style={styles.input}
          placeholder="your course goal!"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>Add goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}> hello world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginRight: 30,
    color: "blue",
    borderRadius: 10,
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    width: "30%",
  },
  goalContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});
