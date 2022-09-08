import { Text, View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
    return (
        <View style={styles.rooteContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
            <PrimaryButton>Start New Game</PrimaryButton>
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
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 20,
        justifyContent: "center",
        marginBottom: 20
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.accent2_500
    }
})
