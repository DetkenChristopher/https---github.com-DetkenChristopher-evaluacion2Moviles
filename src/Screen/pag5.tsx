import React, { useState } from 'react'
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

export const pag5 = () => {

    const [num1, setnum1] = useState<Number>(0)
    const [num2, setnum2] = useState<Number>(0)

    const menorIgual = () => {
        if (num1 == num2 ) {
            Alert.alert(
                `el numero es igual`,
                
            );
        }
        else if (num1 < num2 ) {  
            Alert.alert(
                `el numero ${num1} es menor que ${num2}`,
                
            );
            
        }
    else if (num2 < num1 ) {  
        Alert.alert(
            `el numero ${num2} es menor que ${num1}`,
            
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
                        handleSetValues={setnum1}
                        name='num1' />
                    <InputComponent
                        placeholder='ingrese in numero'
                        handleSetValues={setnum2}
                        name='num2' />
                </View>
                <ButtonComponent TextButton='<=' actionButton={menorIgual} />
        
            </BodyComponents>
    </View>
  )
}
