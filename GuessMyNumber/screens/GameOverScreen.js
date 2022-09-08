import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
    return (
        <View style={styles.rooteContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text>Your phone needed X rounds to guess the number Y.</Text>
        </View>
    )
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rooteContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.accent2_500,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
