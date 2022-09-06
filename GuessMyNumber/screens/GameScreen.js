import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRpndomBetween = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRpndomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
};

let minBondary = 1;
let maxBondary = 100;

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRpndomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie! :p", [
                { text: "I'll be honest", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBondary === currentGuess;
        } else {
            minBondary === currentGuess + 1;
        }
        const newRandomNum = generateRpndomBetween(
            minBondary,
            maxBondary,
            currentGuess
        );
        setCurrentGuess(newRandomNum);
    };
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, "lower")}
                    >
                        -
                    </PrimaryButton>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, "greater")}
                    >
                        +
                    </PrimaryButton>
                </View>
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
