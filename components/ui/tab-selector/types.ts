export interface TabItem {
  id: string;
  label: string;
  value: string;
}

export interface TabSelectorProps {
  tabs: TabItem[];
  selectedTab: string;
  onTabChange: (tabValue: string) => void;
  containerStyle?: object;
  activeTabStyle?: object;
  inactiveTabStyle?: object;
  indicatorStyle?: object;
  textStyle?: object;
  activeTextStyle?: object;
  animationDuration?: number;
}

export interface TabItemProps {
  tab: TabItem;
  isSelected: boolean;
  onPress: (tabValue: string) => void;
  containerStyle?: object;
  textStyle?: object;
  activeTextStyle?: object;
  index: number;
  totalTabs: number;
}

export interface SlidingIndicatorProps {
  selectedIndex: number;
  totalTabs: number;
  containerWidth: number;
  animationDuration?: number;
  indicatorStyle?: object;
}
