import { StyleSheet } from "react-native";
import Colors from "./colors";

const TextStyles = StyleSheet.create({
    h2Bold: {
        fontSize: 26,
        fontFamily: 'Michroma',
        fontWeight: 'bold',
        color: Colors.black,
        letterSpacing: 2,
        textDecorationLine: 'underline',
        marginVertical: 20,
        alignSelf: 'flex-start'
    },
    h4Normal: {
        alignSelf:'flex-end',
        marginTop: 5,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: Colors.black,
        textDecorationLine: 'underline'
    }
})

export default TextStyles;