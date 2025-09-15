import { StyleSheet, Text, TextStyle, type TextProps } from 'react-native';

import { useThemeColor } from '../hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'sm' | 'md' | 'lg' | 'xl';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'sm',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
const themes = {
  sm:styles.subtitle,
  md:{...styles.subtitle,fontWeight:'400'},
  lg:styles.title,
  xl:styles.defaultSemiBold,
}

  return (
    <Text
      style={[
        { color },
        themes[type] as TextStyle,
        style
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '700',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'semibold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
