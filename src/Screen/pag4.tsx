import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BodyComponents } from '../components/BodyComponents'
import { InputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/buttonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../StackNavigator'
import { CommonActions } from '@react-navigation/native'

interface Props{
num1:Number;
num2:Number;
}
interface Props extends StackScreenProps<RootStackParams, 'pag2'> { };
export const pag4 = ({navigation}:Props) => {

    const [num1, setnum1] = useState<Number>(0)
    const [num2, setnum2] = useState<Number>(0)

    const mayorIgual = () => {
        if (num1 === num2 ) {
            
            Alert.alert(
                'el numero es igual'
            );
            
        }
        else if (num1 > num2 ) {  
            Alert.alert(
                `el numero ${num1} es mayor que ${num2}`,
                
            );
        
        }
    else if (num2 > num1 ) {  
        Alert.alert(
            `el numero ${num2} es mayor que ${num1}`,
            
        );
        
    }else{
        Alert.alert('error')
    }

    }


  return (
    <View>
    <BodyComponents>
                
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='ingrese un numero'
                        handleSetValues={setnum1=>(num1)}
                        name='num1' />
                    <InputComponent
                        placeholder='ingrese un numero'
                        handleSetValues={setnum2=>(num2)}
                        name='num2' 
                        />
                </View>
                <ButtonComponent TextButton='>=' actionButton={mayorIgual} />
        
            </BodyComponents>
            <TouchableOpacity onPress={() => 
      navigation.dispatch(CommonActions.navigate({ name: 'pag5' }))} style={styles.button}>
        <Text>
           {'<='}
        </Text>
    </TouchableOpacity>
    </View>
  )
}
