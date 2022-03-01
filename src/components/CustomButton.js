import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const CustomButton = props => {
  const {btnColor, btnText, onPress} = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 25,
        width: 150,
        height: 50,
        backgroundColor: btnColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}>
      <Text style={{fontWeight: 'bold', color: '#fff'}}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
