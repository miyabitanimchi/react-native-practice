import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useState, useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen = ({ route, navigation }) => {
    // const [meal, setMeal] = useState(null);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
        });
    }, [mealId, navigation]);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );
};

export default MealDetailsScreen;
