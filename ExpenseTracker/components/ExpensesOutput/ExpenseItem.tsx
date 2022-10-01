import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Palette } from '../../constants/styles';
import { ItemData } from '../../global';
import { getFormattedDate } from '../../utils/date';
import { useNavigation } from '@react-navigation/native';
// import { ManageExpenseProps } from '../../global';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StackParamList } from '../../global';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../global';
import type { StackNavigationProp } from '@react-navigation/stack';

type ManageExpenseScreenProps = NativeStackScreenProps<
  StackParamList,
  'ManageExpense'
>;

interface Props {
  item: ItemData;
}

// type ManageExpenseScreenProps = NativeStackScreenProps<
//   StackParamList,
//   'ManageExpense'
// >;

const ExpenseItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<ManageExpenseScreenProps>();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense');
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount.toFixed()}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
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
    minWidth: 80,
  },
  amount: {
    color: Palette.blue400,
    fontWeight: 'bold',
  },
});
