import * as React from 'react';
import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 79.99,
    date: new Date('2022-09-28'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 49.99,
    date: new Date('2022-09-30'),
  },
  {
    id: 'e3',
    description: 'Bath Tissues',
    amount: 26.0,
    date: new Date('2022-10-03'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 18.99,
    date: new Date('2022-10-14'),
  },
  {
    id: 'e5',
    description: 'eBook',
    amount: 15.59,
    date: new Date('2022-10-20'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
