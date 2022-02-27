import React from 'react'
import {View, Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {styles} from '../styles/SignupStyles'

const CustomInput = props => {
  const {text, IconType, iconName} = props
  const {inputContainer, inputText} = styles

  return (
    <View style={inputContainer}>
      {IconType === 'Feather' ? (
        <Feather name={iconName} size={18} color="#888" />
      ) : IconType === 'FontAwesome' ? (
        <FontAwesome name={iconName} size={18} color="#888" />
      ) : IconType === 'Fontisto' ? (
        <Fontisto name={iconName} size={18} color="#888" />
      ) : IconType === 'Ionicons' ? (
        <Ionicons name={iconName} size={18} color="#888" />
      ) : null}
      <Text style={inputText}>{text}</Text>
    </View>
  )
}

export default CustomInput
