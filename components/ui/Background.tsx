import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/theme'
import SparkleIcon from '../icons/SparkleIcon'

const Background = ({children}: {children: React.ReactNode}) => {
  return (
   <SafeAreaView
   style={style.container}
   edges={['top']}>
{children}
<View
style={style.iconContainer}
>
  <SparkleIcon></SparkleIcon>
</View>
   </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.light.background,
        paddingHorizontal:20,
    },
    iconContainer:{
      height:50,
      width:50,
      zIndex:1000,
position:'absolute',
bottom:10,
backgroundColor:'#fff',
right:10,
borderRadius:30,
justifyContent:'center',
alignItems:'center',
shadowColor:'rgba(0,0,0,0.1)',
shadowOffset:{width:0,height:2},
shadowOpacity:0.55,
shadowRadius:0.9,
elevation:5,
    }
})

export default Background