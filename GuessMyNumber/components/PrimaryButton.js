import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
    const pressHandler = () => {
        console.log("pressed");
    };
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: Colors.primary400 }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: {
        color: Colors.accent500,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
