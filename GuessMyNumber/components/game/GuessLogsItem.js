import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogsItem = ({ roundNum, guess }) => {
    return (
        <View style={styles.listitem}>
            <Text style={styles.itemText}>#{roundNum}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogsItem;

const styles = StyleSheet.create({
    listitem: {
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent2_500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: "open-sans",
    }
})