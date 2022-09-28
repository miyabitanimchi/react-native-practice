import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import FavoriteContextProvider from "./store/context/favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

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
                drawerContentStyle: { backgroundColor: "#9eecff" },
                drawerInactiveTintColor: "gray",
                drawerActiveTintColor: "#0580FA",
                drawerActiveBackgroundColor: "#DCECFC",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: "Favorites",
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="heart" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            {/* <FavoriteContextProvider> */}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
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
            </Provider>
            {/* </FavoriteContextProvider> */}
        </>
    );
}

const styles = StyleSheet.create({});
