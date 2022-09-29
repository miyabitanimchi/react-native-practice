import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Palette } from '../../constants/styles';
import { ItemData } from '../../global';

interface Props {
  item: ItemData;
}

const ExpenseItem: React.FC<Props> = ({ item }) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.description}
          </Text>
          <Text style={styles.textBase}>{item.date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: Palette.blue400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Palette.white,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Palette.white,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Palette.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: Palette.blue400,
    fontWeight: 'bold',
  },
});
