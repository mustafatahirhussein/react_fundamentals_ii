import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashView from "../views/splash";
import Parent from "../views/parent";

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashView}></Stack.Screen>
          <Stack.Screen name="Parent" component={Parent}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )
}

export default AppNavigator;