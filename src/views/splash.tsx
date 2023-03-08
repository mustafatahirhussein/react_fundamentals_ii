import React, { useEffect } from "react";
import {View, Text} from 'react-native';

const SplashView = ({navigation}) => {

        useEffect(() => {
            setTimeout(() => {
                navigation.navigate('Parent');
            }, 4000)
        }, [])
    return (
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
            <Text>SplasH page</Text>
        </View>
    )
}

export default SplashView;