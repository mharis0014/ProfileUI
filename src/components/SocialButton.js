import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = props => {
  const {btnColor, btnText, iconName, onPress} = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 25,
        width: 115,
        height: 40,
        backgroundColor: btnColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <FontAwesome
        style={{marginRight: 10}}
        name={iconName}
        size={15}
        color="#fff"
      />
      <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 12}}>
        {btnText}
      </Text>
    </TouchableOpacity>
  )
}

export default SocialButton
