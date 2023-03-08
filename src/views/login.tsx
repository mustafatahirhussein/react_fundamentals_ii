import React from "react";
import {View, Text, Alert, ImageBackground, Image, TouchableOpacity} from 'react-native';
import AppButton from "../components/app_button";
import DisabledButton from "../components/disabled_button";
import TextField from "../components/textfields";
import TextStyles from "../const/text_style";

const LoginView = ({navigation}) => {

    return (
        <View style={{alignItems: 'center', padding: 20, width: '100%'}}>
            <Text style={TextStyles.h2Bold}>Login</Text>

            <Image source={require('../../assets/images/background.jpg')} resizeMode='cover' 
            style={{height: 150, width: 120, alignSelf:'center', marginBottom: 40}}/>

            <TextField placeholder='Email' prefixIcon='email-outline'/>
            <TextField placeholder='Password' prefixIcon='lock'/>
            <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => navigation.navigate('RegisterView')}>
            <Text style={TextStyles.h4Normal}>Register here</Text>
            </TouchableOpacity>

            <AppButton title='Login' onPress={() => Alert.alert("Message", "Success", [{text: 'OK', onPress: () => {navigation.navigate('HomePage')}}])}/>
        </View>
    )
}

export default LoginView;