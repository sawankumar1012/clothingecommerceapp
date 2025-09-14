import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
  type ViewStyle
} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  lightColor?: string;
  darkColor?: string;
  variant?: 'primary' | 'secondary' | 'outline'|'dashed';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({
  children,
  style,
  lightColor,
  darkColor,
  variant = 'primary',
  size = 'md',
  ...rest
}: ButtonProps) => {
 

  const variants = {
    primary: { 
        backgroundColor: useThemeColor({}, 'buttonBackgroundColor'),
        borderWidth: 1,
        borderColor: useThemeColor({}, 'tint'),
        shadowColor:useThemeColor({}, 'tint'),
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 1,
          elevation: 3, 
      },
    secondary: { 
      backgroundColor: useThemeColor({}, 'buttonBackgroundColor'),
      borderWidth: 1,
      borderColor: useThemeColor({}, 'tint')
    },
    outline: { 
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: useThemeColor({}, 'tint')
    },
    dashed:{
backgroundColor:'transparent',
borderWidth:1,
borderStyle: 'dashed',
borderColor: useThemeColor({}, 'tint')
    }
  };

  const sizes = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variants[variant] as ViewStyle,
        sizes[size],
        style
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    gap:5,
    minWidth:80,
  },
  small: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    height:35,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 52,
  },
});

