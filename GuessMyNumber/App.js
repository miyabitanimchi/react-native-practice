import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
    return (
        <LinearGradient
            colors={["#D66D75", "#E29587"]}
            style={styles.rootScreen}
        >
            <StartGameScreen />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        backgroundColor: "#edf7f6",
        flex: 1,
    },
});
