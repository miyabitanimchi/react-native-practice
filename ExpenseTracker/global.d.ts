// import { CompositeScreenProps } from '@react-navigation/native';
// import { StackScreenProps } from '@react-navigation/stack';
// import { StackNavigationProp } from '@react-navigation/stack';
export interface ItemData {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export type StackParamList = {
  ManageExpense: undefined;
  ExpensesOverview: undefined;
};
