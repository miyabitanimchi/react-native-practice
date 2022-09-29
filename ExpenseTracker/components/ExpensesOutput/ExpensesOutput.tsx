import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import DUMMY_EXPENSES from '../../dummyData/dummyData';
import { ItemData } from '../../global';
import { Palette } from '../../constants/styles';

interface Props {
  expenses: ItemData[];
  expensesPeriod: string;
}

const ExpensesOutput: React.FC<Props> = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Palette.blue400,
  },
});
