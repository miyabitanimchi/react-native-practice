import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    useWindowDimensions,
    ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNum, userNum, onStartNewGame }) => {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    };

    if (height < 450) {
        imageSize = 80;
    };

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rooteContainer}>
                <Title>GAME OVER</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require("../assets/images/success.png")} />
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess the number <Text style={styles.highlight}>{userNum}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rooteContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.accent2_500,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 20,
        justifyContent: "center",
        marginBottom: 20
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.accent2_500
    }
})
