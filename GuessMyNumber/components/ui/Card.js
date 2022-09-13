import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 100,
        backgroundColor: "rgba(237, 247, 246, 0.4),",
        borderRadius: 8,
        elevation: 5, // android only
        shadowColor: "#393f4d",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
});
