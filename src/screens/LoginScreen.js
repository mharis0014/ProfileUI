import React, {useState} from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import {SignupStyles, LoginStyles} from '../styles/AuthStyles'
import SocialButton from '../components/SocialButton'

const LoginScreen = ({navigation}) => {
  const {heading, smallText, blackText, boldText} = SignupStyles
  const {image, rightAlign, container} = LoginStyles

  const [userName, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')

  const validate = () => {
    userName === ''
      ? Alert.alert('Username is required')
      : password === ''
      ? Alert.alert('Password is required')
      : userName === 'adey' && password === 'adey123'
      ? Alert.alert('Signed in Successfully')
      : Alert.alert('Username or Password is incorrect')
  }

  return (
    <ScrollView>
      <View style={container}>
        <Image style={image} source={require('../assets/login_image.png')} />
        <Text style={heading}>Welcome Back!</Text>
        <Text style={smallText}>Login into your existing account</Text>
        <CustomInput
          IconType={'Feather'}
          iconName={'user'}
          value={userName}
          placeholder={'UserName'}
          onChangeText={onChangeUsername}
        />
        <CustomInput
          IconType={'Ionicons'}
          iconName={'lock-closed-outline'}
          value={password}
          placeholder={'Password'}
          onChangeText={onChangePassword}
        />
        <Text style={[blackText, rightAlign]}>Forgot Password?</Text>
        <CustomButton
          btnColor={'#3d37cd'}
          btnText={'LOG IN'}
          onPress={validate}
        />
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
