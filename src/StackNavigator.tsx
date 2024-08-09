import { createStackNavigator } from '@react-navigation/stack';
import { pag1 } from './Screen/pag1';
import { PRIMARY_COLOR } from './common/constantsColor';
import { pag2 } from './Screen/pag2';
import { pag3 } from './Screen/pag3';
import { pag4 } from './Screen/pag4';
import { pag5 } from './Screen/pag5';

const Stack = createStackNavigator();

export type RootStackParams = {
  pag1: undefined,
  pag2: undefined,
  pag3: undefined,
  pag4: undefined,
  pag5: undefined,
  
}

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
        
      <Stack.Screen name="pag1" options={{headerShown:false}} component={pag1} />
      <Stack.Screen name="pag2" options={{headerShown:false}} component={pag2} />
      <Stack.Screen name="pag3" options={{headerShown:false}} component={pag3} />
      <Stack.Screen name="pag4" options={{headerShown:false}} component={pag4} />
      <Stack.Screen name="pag5" options={{headerShown:false}} component={pag5} />
      
    </Stack.Navigator>
  );
}