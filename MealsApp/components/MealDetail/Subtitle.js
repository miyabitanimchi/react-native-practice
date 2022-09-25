import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 6,
        textAlign: "center",
    },
});
