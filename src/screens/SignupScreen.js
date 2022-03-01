import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import {SignupStyles} from '../styles/AuthStyles'

const SignupScreen = ({navigation}) => {
  const {container, heading, smallText, blackText, boldText} = SignupStyles
  return (
    <View style={container}>
      <Text style={heading}>Let's Get Started!</Text>
      <Text style={smallText}>Create an account to get all features</Text>
      <>
        <CustomInput IconType={'Feather'} iconName={'user'} text={'UserName'} />
        <CustomInput IconType={'Fontisto'} iconName={'email'} text={'Email'} />
        <CustomInput
          IconType={'FontAwesome'}
          iconName={'mobile-phone'}
          text={'Phone'}
        />
        <CustomInput
          IconType={'Ionicons'}
          iconName={'lock-closed-outline'}
          text={'Password'}
        />
        <CustomInput
          IconType={'Ionicons'}
          iconName={'lock-closed-outline'}
          text={'Confirm Password'}
        />
      </>
      <CustomButton btnColor={'#3d37cd'} btnText={'CREATE'} />
      <Text style={blackText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={boldText}>Login here</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

export default SignupScreen
