import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../global';

type ManageExpenseScreenProps = NativeStackScreenProps<
  StackParamList,
  'ManageExpense'
>;

const ManageExpense: React.FC<ManageExpenseScreenProps> = () => {
  return (
    <View>
      <Text>Manage Expense Screen</Text>
    </View>
  );
};

export default ManageExpense;
