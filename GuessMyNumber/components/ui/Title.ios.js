import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: Colors.accent500,
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 0,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 7,
        maxWidth: "80%",
        width: 300,
    },
});
