import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import theme from '../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons';

const BackButton = ({size=26, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
     <Ionicons name="chevron-back-sharp" size={20} color="black" />
    </Pressable>
  )
}


export default BackButton

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: 20,
        backgroundColor: 'rgba(160, 160, 160, 0.07)'
    }
})