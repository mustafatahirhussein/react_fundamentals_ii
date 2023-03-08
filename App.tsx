import React from "react";
import LoginView from "./src/views/login";
import RegisterView from "./src/views/register";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from "./src/views/home_page";

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginView" screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginView" component={LoginView}></Stack.Screen>
      <Stack.Screen name="RegisterView" component={RegisterView}></Stack.Screen>
      <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyApp;