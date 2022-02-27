import React from 'react'
import {View, Text} from 'react-native'

const CustomButton = props => {
  const {btnColor, btnText} = props

  return (
    <View
      style={{
        margin: 25,
        width: 150,
        height: 50,
        backgroundColor: btnColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}>
      <Text style={{fontWeight: 'bold'}}>{btnText}</Text>
    </View>
  )
}

export default CustomButton
