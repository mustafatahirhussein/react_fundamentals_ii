import { StyleSheet } from "react-native";
import Colors from "./colors";

const TextStyles = StyleSheet.create({
    h2Bold: {
        fontSize: 28,
        fontFamily: 'Michroma',
        fontWeight: 400,
        color: Colors.black,
        letterSpacing: 1.5,
        textDecorationLine: 'underline',
        marginVertical: 20
    }
})

export default TextStyles;