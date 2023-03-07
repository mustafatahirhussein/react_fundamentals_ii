import React from "react"
import { TextInput, StyleSheet, View } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../const/colors";

function TextField({placeholder, prefixIcon}) {
    return (
        <View style={styles.input}>
            <Icons style={styles.icon} name={prefixIcon}/>
            <TextInput placeholder={placeholder} placeholderTextColor={Colors.white} style={styles.textInput}/>
        </View>
    )
}

export default TextField;

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: '100%',
        backgroundColor: Colors.lightBlue,
        flexDirection: 'row',
        borderRadius: 12,
        alignContent: 'center',
        marginVertical: 8
    },
    icon: {
        fontSize: 20,
        color: Colors.white,
        margin: 6,
        padding: 6,
    },
    textInput: {
        fontFamily: 'Michroma', fontSize:12, flex: 1, fontWeight: 'bold',color: Colors.white
    }
})