import { Text, StyleSheet } from "react-native";
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
        borderWidth: 2,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 7,
        maxWidth: "80%",
        width: 300
    },
});
