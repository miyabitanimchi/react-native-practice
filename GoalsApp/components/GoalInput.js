import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  } 

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title="Cancel" color="salmon" onPress={onCancel} />
          </View>
          <View style={styles.button} >
            <Button title="Add Goal" onPress={addGoalHandler} color="salmon" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffcab0"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fdfafc",
    backgroundColor: "#fdfafc",
    color: " #3e4a61",
    width: "100%",
    padding: 10,
    borderRadius: 6
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});