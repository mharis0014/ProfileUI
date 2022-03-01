import React, {useEffect} from 'react'
import {View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3d37cd',
      }}>
      <FontAwesome name="apple" size={100} color={'#fff'} />
    </View>
  )
}

export default SplashScreen
