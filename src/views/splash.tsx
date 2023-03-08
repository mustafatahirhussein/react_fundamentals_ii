import React, { useEffect } from "react";
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {

        useEffect(() => {
            setTimeout(() => {
                navigation.navigate('LoginView');
            }, 4000)
        }, [])
    return (
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
            <Text>SplasH page</Text>
        </View>
    )
}

export default Splash;