import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createNativeStackNavigator()

const Navigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
