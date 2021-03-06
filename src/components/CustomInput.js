import React from 'react'
import {View, TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {SignupStyles} from '../styles/AuthStyles'

const CustomInput = props => {
  const {text, IconType, iconName, onChangeText, placeholder} = props
  const {inputContainer, inputText} = SignupStyles

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
      <TextInput
        style={inputText}
        placeholder={placeholder}
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default CustomInput
