import * as React from 'react';
import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import DUMMY_EXPENSES from '../../dummyData/dummyData';
import { ItemData } from '../../global';

interface Props {
  expenses: ItemData[];
  expensesPeriod: string;
}

const ExpensesOutput: React.FC<Props> = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
