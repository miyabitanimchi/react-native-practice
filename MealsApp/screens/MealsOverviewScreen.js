import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (mealItem) => {
        return <MealItem title={mealItem.item.title} />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            ></FlatList>
            {/* <Text>Meals Overview Screen - {catId}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsOverviewScreen;
