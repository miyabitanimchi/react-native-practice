import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useState, useLayoutEffect } from "react";

const MealDetailsScreen = ({ route, navigation }) => {
    const [meal, setMeal] = useState(null);
    const mealId = route.params.mealId;

    useLayoutEffect(() => {
        const mealData = MEALS.filter((meal) => meal.id === mealId);
        setMeal(...mealData);
        navigation.setOptions({
            title: mealData[0].title
        })
    }, [mealId, navigation]);


    return (
        <>
            {meal && (
                <View>
                    <Text>{meal.title}</Text>
                </View>
            )}
        </>
    )
}

export default MealDetailsScreen;