import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevState) => [
      ...prevState,
      // this key will be automatically used in Flatlist
      // { text: enteredGoalText, key: Math.random().toString() }
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
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
  goalsContainer: {
    flex: 5
  }
});
