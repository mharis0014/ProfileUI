import React from 'react'
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import {SignupStyles, LoginStyles} from '../styles/AuthStyles'
import SocialButton from '../components/SocialButton'

const LoginScreen = ({navigation}) => {
  const {heading, smallText, blackText, boldText} = SignupStyles
  const {image, rightAlign} = LoginStyles

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={image} source={require('../assets/login_image.png')} />
        <Text style={heading}>Welcome Back!</Text>
        <Text style={smallText}>Login into your existing account</Text>
        <CustomInput IconType={'Feather'} iconName={'user'} text={'UserName'} />
        <CustomInput
          IconType={'Ionicons'}
          iconName={'lock-closed-outline'}
          text={'Password'}
        />
        <Text style={[blackText, rightAlign]}>Forgot Password?</Text>
        <CustomButton btnColor={'#3d37cd'} btnText={'LOG IN'} />
        <Text style={{color: '#888', fontSize: 12}}>Or connect using</Text>
        <View style={{flexDirection: 'row'}}>
          <SocialButton
            btnColor="#3d37cd"
            btnText={'Facebook'}
            iconName={'facebook'}
          />
          <SocialButton btnColor="red" btnText={'Google'} iconName={'google'} />
        </View>
        <Text style={blackText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={boldText}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  )
}

export default LoginScreen
