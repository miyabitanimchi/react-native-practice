import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from './global';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { Palette } from './constants/styles';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// import Profile

const Stack = createNativeStackNavigator<StackParamList>();
const BottomTabs = createBottomTabNavigator();
// type ScreenProp = StackScreenProps<StackParamList, 'ManageExpense'>;

type ExpensesOverviewScreenProps = NativeStackScreenProps<
  StackParamList,
  'ExpensesOverview'
>;

const ExpensesOverview: React.FC<ExpensesOverviewScreenProps> = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Palette.green500 },
        headerTintColor: Palette.white,
        tabBarStyle: {
          backgroundColor: Palette.green500,
        },
        tabBarActiveTintColor: Palette.orange500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
