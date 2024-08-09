import React from 'react'
import { TextInput, View } from 'react-native'
import { IMPUT_COLOR, PRIMARY_COLOR } from '../common/constantsColor'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props{
placeholder:string;
handleSetValues:(name:string, value:string)=> void;
name:string;
isPassword?:boolean;
isimge?:boolean;
}

export const InputComponent = ({placeholder,handleSetValues,name,isPassword=false}:Props) => {
  return (
    <View>
      <Icon name='visibility' 
      size={25} 
      color={IMPUT_COLOR}
      style={styles.iconPassword}/>
    
              <TextInput
              placeholder={placeholder}
              keyboardType='default'
              onChangeText={(value)=>handleSetValues(name,value)}
              secureTextEntry={isPassword}
              
              style={styles.inputText}/>
          </View>    
  );
}
