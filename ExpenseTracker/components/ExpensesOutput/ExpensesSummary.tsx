import * as React from 'react';
import { View, Text } from 'react-native';
import { ItemData } from '../../global';

interface Props {
  expenses: ItemData[];
  periodName: string;
}

const ExpensesSummary: React.FC<Props> = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
