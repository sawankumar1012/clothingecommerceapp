import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { useThemeColor } from '../../../hooks/use-theme-color';
import { TabItem } from './TabItem';
import { TabSelectorProps } from './types';

export const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  selectedTab,
  onTabChange,
  containerStyle,
  activeTabStyle,
  inactiveTabStyle,
  indicatorStyle,
  textStyle,
  activeTextStyle,
  animationDuration = 300,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  
  const backgroundColor = useThemeColor({}, 'tabSelectorBackground');
  const borderColor = useThemeColor({}, 'tabSelectorBorder');
  const shadowColor = useThemeColor({}, 'tabSelectorShadow');

  const selectedIndex = tabs.findIndex(tab => tab.value === selectedTab);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }, []);

  const handleTabPress = useCallback((tabValue: string) => {
    onTabChange(tabValue);
  }, [onTabChange]);

  return (
    <View
      style={[
        styles.container,
        {
      borderWidth:2,
          borderColor:borderColor,
          shadowColor,
        },
        containerStyle,
      ]}
      onLayout={handleLayout}
    >
      
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TabItem
            key={tab.id}
            tab={tab}
            isSelected={tab.value === selectedTab}
            onPress={handleTabPress}
            containerStyle={tab.value === selectedTab ? activeTabStyle : inactiveTabStyle}
            textStyle={textStyle}
            activeTextStyle={activeTextStyle}
            index={index}
            totalTabs={tabs.length}
          />
        ))}
      </View>

      {/* Sliding Indicator */}
      {/* {containerWidth > 0 && (
        <SlidingIndicator
          selectedIndex={selectedIndex}
          totalTabs={tabs.length}
          containerWidth={containerWidth}
          animationDuration={animationDuration}
          indicatorStyle={indicatorStyle}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 52,
    borderWidth: 1,
    padding: 4,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
