import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { TabItemProps } from "./types";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const TabItem: React.FC<TabItemProps> = ({
  tab,
  isSelected,
  onPress,
  containerStyle,
  textStyle,
  activeTextStyle,
  index,
  totalTabs,
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(isSelected ? 1 : 0.7);

  const activeTextColor = useThemeColor({}, "tabSelectorActiveText");
  const inactiveTextColor = useThemeColor({}, "tabSelectorInactiveText");
  const borderColor = useThemeColor({}, "tabSelectorBorder");
  const shadowColor = useThemeColor({}, "tabSelectorShadow");
  React.useEffect(() => {
    opacity.value = withSpring(isSelected ? 1 : 0.7, {
      damping: 15,
      stiffness: 150,
    });
  }, [isSelected, opacity]);

  const handlePressIn = () => {
    scale.value = withSpring(0.95, {
      damping: 15,
      stiffness: 200,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 200,
    });
  };

  const handlePress = () => {
    scheduleOnRN(onPress, tab.value);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const textOpacity = interpolate(opacity.value, [0.7, 1], [0.7, 1]);

    return {
      opacity: textOpacity,
    };
  });
  const isSelectedStyle = {
    borderRadius: 52,
    backgroundColor: "white",
    borderColor: borderColor,

    shadowColor: shadowColor,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 3, // For Android
  };

  return (
    <AnimatedPressable
      style={[
        styles.container,
        animatedStyle,
        containerStyle,
        {
          ...(isSelected && isSelectedStyle),
        },
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Animated.View style={animatedTextStyle}>
        <ThemedText
          style={[
            isSelected && activeTextStyle,
            {
              fontWeight:isSelected?'bold':'semibold',
              color: isSelected ? activeTextColor : inactiveTextColor,
            },

          ]}
          type="sm"
        >
          {tab.label}
        </ThemedText>
      </Animated.View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  selectedTab: {},
});
