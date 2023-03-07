import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, Alert } from "react-native";
import Colors from "../const/colors";

const width = Dimensions.get('window').width;

function DisabledButton({title}) {
    return (
        <TouchableOpacity disabled onPress={() => {Alert.alert("aa")}}>
            <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: Colors.gray,
        height: 45,
        width: width * 0.40,
        marginVertical: 15,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    text: {
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Gilroy-Bold',
        fontWeight: 'bold',
    }
})

export default DisabledButton;