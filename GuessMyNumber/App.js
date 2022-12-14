import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";

import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(false);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
    const gameOverHandler = (numOfRounds) => {
        setGameIsOver(true);
        setGuessRounds(numOfRounds);
    };

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen roundsNum={guessRounds} userNum={userNumber} onStartNewGame={startNewGameHandler} />;
    }

    return (
        <>
        <StatusBar style="light" />
        <LinearGradient
            colors={[Colors.secondary500, Colors.secondary300]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.1,
    },
});
