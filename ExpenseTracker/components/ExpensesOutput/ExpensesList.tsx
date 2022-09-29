import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { ItemData } from '../../global';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: ItemData[];
}

const renderExpenseItem: ListRenderItem<ItemData> = ({ item }) => {
  return <ExpenseItem item={item} />;
};

const ExpensesList: React.FC<Props> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
