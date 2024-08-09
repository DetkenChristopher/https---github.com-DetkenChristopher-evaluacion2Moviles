import React from 'react'
import { Alert, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BodyComponents } from '../components/BodyComponents'
import { InputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/buttonComponent'

interface Props{
num1:Number;
num2:Number;
resultado:string;
}

export const pag5 = ({num1, num2,resultado}:Props) => {

    const mayorIgual = () => {
        if (num1 == num2 ) {
            Alert.alert(
                `el numero es igual`,
                
            );
        }
        else if (num1 < num2 ) {  
            Alert.alert(
                `el numero {num1} es menor que {num2}`,
                
            );
            
        }
    else if (num2 < num1 ) {  
        Alert.alert(
            `el numero {num2} es menor que {num1}`,
            
        );
    }else{
        Alert.alert(
            'error'
        )
    }

    }


  return (
    <View>
    <BodyComponents>
                
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='ingrese un numero'
                        handleSetValues={Number}
                        name='num1' />
                    <InputComponent
                        placeholder='ingrese in numero'
                        handleSetValues={Number}
                        name='num2' />
                </View>
                <ButtonComponent TextButton='Iniciar' actionButton={mayorIgual} />
        
            </BodyComponents>
    </View>
  )
}
