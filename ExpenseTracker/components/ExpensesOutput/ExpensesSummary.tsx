import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ItemData } from '../../global';
import { Palette } from '../../constants/styles';

interface Props {
  expenses: ItemData[];
  periodName: string;
}

const ExpensesSummary: React.FC<Props> = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Palette.green500,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: Palette.white,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Palette.white,
  },
});
