import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const dismissAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevState) => [
      ...prevState,
      // this key will be automatically used in Flatlist
      // { text: enteredGoalText, key: Math.random().toString() }
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    dismissAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="salmon" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={dismissAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fbf2d5"
  },
  goalsContainer: {
    flex: 5
  }
});
