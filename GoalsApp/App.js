import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals((prevState) => [
      ...prevState,
      // this key will be automatically used in Flatlist
      // { text: enteredGoalText, key: Math.random().toString() }
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "salmon",

  },
  goalText: {
    color: "white"
  }
});
