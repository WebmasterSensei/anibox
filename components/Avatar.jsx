import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../constants/theme'

const Avatar = ({size, src}) => {
  return (
    <View style={[styles.avatar, {height: size}]}>
      <Image
            source={src}
            style={{ width: size, height: size, borderRadius: size / 2,}}
          />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: theme.colors.secondary,
        borderRadius: 30,
    }
})