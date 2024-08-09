import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props{
    title:string;
}

export const TitleComponent = ({title}:Props) => {
    
  return (
    <Text style={styles.globalTitle}>
{title}
    </Text>
  )
}
