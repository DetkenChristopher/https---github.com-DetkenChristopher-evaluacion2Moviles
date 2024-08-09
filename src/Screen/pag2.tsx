import { CommonActions } from '@react-navigation/native'
import React from 'react'
import { Button, Image, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../StackNavigator'

interface Props extends StackScreenProps<RootStackParams, 'pag2'> { };

export const pag2 = ({navigation}:Props) => {
  return (
    <View>
       <Image style={styles.image} source={{uri:'https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg' }}/>
       <TouchableOpacity onPress={() => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag3' }))} 
      style={styles.button}>
        <Text>
           imagen 2
        </Text>
    </TouchableOpacity>
    </View>
    
  )
}
