import * as React from 'react';
import { Text, FlatList, ListRenderItem } from 'react-native';
import { ItemData } from '../../global';

interface Props {
  expenses: ItemData[];
}

const renderExpenseItem: ListRenderItem<ItemData> = ({ item }) => {
  return <Text>{item.description}</Text>;
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
