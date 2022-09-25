import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                // screenOptions={{
                //     headerStyle: {
                //         backgroundColor: "#9eecff",
                //     },
                //     headerTintColor: "black",
                //     contentStyle: { backgroundColor: "#f2f2f2" },
                // }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: "All Categories",
                            headerStyle: {
                                backgroundColor: "#9eecff",
                            },
                            headerTintColor: "black",
                            contentStyle: { backgroundColor: "#f2f2f2" },
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // option={({route, navigation}) => {
                        //     const catId = route.params.categoryId;
                        //     return {
                        //         title: catId
                        //     };
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
