import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    TextButton:string
    actionButton:()=>void
}

export const ButtonComponent = ({TextButton,actionButton}:Props) => {
  return (
    <TouchableOpacity onPress={actionButton} style={styles.button}>
        <Text>
           {TextButton}
        </Text>
    </TouchableOpacity>
  )
}
