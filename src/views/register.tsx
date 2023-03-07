import React from "react";
import {View, Text, Button, Alert} from 'react-native';
import AppButton from "../components/app_button";
import TextField from "../components/textfields";
import TextStyles from "../const/text_style";

const RegisterView = ({navigation, route}) => {

    const name = route.params.myname;

    // return (
    //     <View>
    //         <Text>register view - {name}</Text>

    //         <Button title="Go Back" onPress={() => {navigation.goBack();}}></Button>
    //     </View>
    // )

    return (
        <View style={{alignItems: 'flex-start', padding: 20, width: '100%'}}>

            <Text style={TextStyles.h2Bold}>Register</Text>
            <TextField placeholder='Username' prefixIcon='email-outline'/>
            <TextField placeholder='Email' prefixIcon='email-outline'/>
            <TextField placeholder='Password' prefixIcon='lock'/>

            <AppButton title='Register' onPress={() => Alert.alert("Message", "Success", [{text: 'OK', onPress: () => {navigation.goBack()}}])}/>
            {/* <DisabledButton title='Login'/> */}
        </View>
    )
}

export default RegisterView;