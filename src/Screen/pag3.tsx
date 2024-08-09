import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import { RootStackParams } from '../StackNavigator'
import { CommonActions } from '@react-navigation/native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'pag2'> { };

export const pag3 = ({navigation}:Props) => {
  return (
    <View>
        <Image style={styles.image} source={{uri:'https://d19d9m2dcgrxq7.cloudfront.net/how-to-get-a-parameter-from-a-url-in-react.png' }}/>
        <TouchableOpacity onPress={ () => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag4' }))} style={styles.button}>
        <Text>
          {" >="}
        </Text>
    </TouchableOpacity>
    </View>
  )
}
