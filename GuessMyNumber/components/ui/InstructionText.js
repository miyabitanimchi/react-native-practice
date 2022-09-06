import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
    text: {
        color: Colors.primary500,
        fontSize: 24,
    },
});
