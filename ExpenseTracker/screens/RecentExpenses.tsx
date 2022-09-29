// import { View, Text } from 'react-native';
import * as React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import DUMMY_EXPENSES from '../dummyData/dummyData';

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod="last 7 days" expenses={DUMMY_EXPENSES} />
  );
};

export default RecentExpenses;
