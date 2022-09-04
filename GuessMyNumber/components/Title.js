import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#101357",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#101357",
        borderRadius: 8,
        padding: 7,
    },
});
