import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
} from 'react-native-reanimated';
import { SlidingIndicatorProps } from './types';

export const SlidingIndicator: React.FC<SlidingIndicatorProps> = ({
  selectedIndex,
  totalTabs,
  containerWidth,
  animationDuration = 300,
  indicatorStyle,
}) => {
  const indicatorColor = useThemeColor({}, 'tabSelectorIndicator');

  const indicatorWidth = useDerivedValue(() => {
    return containerWidth / totalTabs;
  });

  const indicatorPosition = useDerivedValue(() => {
    return selectedIndex * indicatorWidth.value;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: indicatorWidth.value,
      transform: [
        {
          translateX: withSpring(indicatorPosition.value, {
            damping: 20,
            stiffness: 200,
            mass: 0.8,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.indicator,
        {
          backgroundColor: indicatorColor,
        },
        animatedStyle,
        indicatorStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2,
    borderRadius: 1,
  },
});
