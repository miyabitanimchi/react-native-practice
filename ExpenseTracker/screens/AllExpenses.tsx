// import { View, Text } from 'react-native';
import * as React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import DUMMY_EXPENSES from '../dummyData/dummyData';

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="Total" expenses={DUMMY_EXPENSES} />;
};

export default AllExpenses;
