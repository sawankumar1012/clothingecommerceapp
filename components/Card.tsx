import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Colors } from "../constants/theme";
type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  save?: 'top-right'|'bottom-right';
  animationDelay?: number; // Optional delay for staggered animations
}
const Card = ({ children, style, save, animationDelay = 0 }: CardProps) => {


const saveStyles = {
  'top-right': {
    top: 10,
    right: 10,
  },
  'bottom-right': {
    bottom: 10,
    right: 10,
  },
}


  return (
    <Animated.View 
      entering={ZoomIn.duration(200).delay(animationDelay).springify()}
      exiting={ZoomOut.duration(200)}
      style={[styles.card, style]}
    >
      {children}
      
      {save && (
        <Animated.View
          entering={ZoomIn.duration(300).delay(animationDelay + 100)}
          exiting={ZoomOut.duration(200)}
          style={[
            styles.save,
            saveStyles[save] as ViewStyle
          ]}
        >
          <FontAwesome name="bookmark" size={15} color="#676566" />
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
    width: "100%",

    
  },
  save:{
position:'absolute',
height:20,
width:30,
justifyContent:'center',
alignItems:'center',
backgroundColor:Colors.light.background,
borderRadius:30,

  }
});
