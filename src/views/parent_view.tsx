import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from "./home_page";
import LoginView from "./login";
import RegisterView from "./register";
import SplashView from "./splash";

const Stack = createNativeStackNavigator();

const ParentView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashView}></Stack.Screen>
      <Stack.Screen name="LoginView" component={LoginView}></Stack.Screen>
      <Stack.Screen name="RegisterView" component={RegisterView}></Stack.Screen>
      <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ParentView;