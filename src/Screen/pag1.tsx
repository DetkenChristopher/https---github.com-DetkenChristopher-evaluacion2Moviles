import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/titleComponent';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appTheme';
import { pag2 } from './pag2';
import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'pag1'> { };

export const pag1 = ({navigation}:Props) => {
  return (
    <View style={styles.contentBody}>
      <Text >
        bienvenidos
      </Text>

      <TouchableOpacity onPress={() => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag2' }))} 
      style={styles.button}>
        <Text>
           imagen 1
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag3' }))} 
      style={styles.button}>
        <Text>
           imagen 2
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag4' }))} style={styles.button}>
        <Text>
          {" >="}
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag5' }))} style={styles.button}>
        <Text>
           {'<='}
        </Text>
    </TouchableOpacity>

    </View>
  )
}


