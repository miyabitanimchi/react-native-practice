import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DwawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9eecff",
                },
                headerTintColor: "black",
                sceneContainerStyle: { backgroundColor: "#f2f2f2" },
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: "All Categories" }}
            />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
};

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
                        name="Drawer"
                        component={DwawerNavigator}
                        options={{
                            headerShown: false,
                            // title: "All Categories",
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
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
