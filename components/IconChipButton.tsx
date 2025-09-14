import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, ButtonProps } from './Button'
import { ThemedText } from './themed-text'
import { IconSymbol } from './ui/icon-symbol'

type IconChipButtonProps = {
  label: string | React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline'|'dashed';
  icon: any;
} & Omit<ButtonProps, 'children' | 'variant'> & {
  
};

const IconChipButton = ({
  label,
  variant,
  icon,
  ...rest
}: IconChipButtonProps) => {
  return (
    <Button
      variant={variant}
      size='sm'
      {...rest}
    >
      <ThemedText type="sm">{label}</ThemedText>
      <IconSymbol name={icon} size={16} color="black" />
    </Button>
  )
}

export default IconChipButton

const styles = StyleSheet.create({})