import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
    const renderMealItem = (mealItem) => {
        const item = mealItem.item;

        // const pressHandler = () => {
        //     navigation.navigate("MealDetail", {
        //         mealId: item.id,
        //     });
        // };

        const mealItemProps = {
            mealId: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return (
            <MealItem
                {...mealItemProps}
                // onPress={pressHandler}
            />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            ></FlatList>
            {/* <Text>Meals Overview Screen - {catId}</Text> */}
        </View>
    );
};

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
