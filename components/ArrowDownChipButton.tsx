import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, ButtonProps } from './Button'
import { ThemedText } from './themed-text'
import { IconSymbol } from './ui/icon-symbol'

type ArrowDownChipButtonProps = {
  label: string | React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline';
} & Omit<ButtonProps, 'children' | 'variant'> & {
  variant: 'primary' | 'secondary' | 'outline';
};

const ArrowDownChipButton = ({
  label,
  variant,
  ...rest
}: ArrowDownChipButtonProps) => {
  return (
    <Button
      variant={variant}
      size='sm'
      {...rest}
    >
      <ThemedText type="sm">{label}</ThemedText>
      <IconSymbol name="chevron.down" size={16} color="black" />
    </Button>
  )
}

export default ArrowDownChipButton

const styles = StyleSheet.create({})