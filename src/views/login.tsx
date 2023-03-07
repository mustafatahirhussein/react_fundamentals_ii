import React from "react";
import {View, Text, Alert, ImageBackground, Image} from 'react-native';
import AppButton from "../components/app_button";
import DisabledButton from "../components/disabled_button";
import TextField from "../components/textfields";
import TextStyles from "../const/text_style";

const LoginView = ({navigation}) => {

    return (
        <View style={{alignItems: 'flex-start', padding: 20, width: '100%'}}>
            <Text style={TextStyles.h2Bold}>Login</Text>

            <Image source={require('../../assets/images/background.jpg')} resizeMode='cover' 
            style={{height: 250, width: 250, alignContent: 'center', alignItems: 'center',}}/>

            <TextField placeholder='Email' prefixIcon='email-outline'/>
            <TextField placeholder='Password' prefixIcon='lock'/>

            <AppButton title='Login' onPress={() => Alert.alert("Message", "Success", [{text: 'OK', onPress: () => {navigation.navigate('RegisterView', {myname: 'Mustafa'})}}])}/>
        </View>
    )
}

export default LoginView;