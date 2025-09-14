# TabSelector Component

A highly customizable and animated tab selector component for React Native with Expo.

## Features

- ✨ Smooth sliding indicator animation
- 🎨 Fully customizable styling
- 🌙 Dark/Light theme support
- 📱 Touch feedback animations
- 🔄 Spring-based animations using Reanimated
- 💎 Pixel-perfect design
- 🏗️ TypeScript support

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { TabSelector, TabItemType } from '@/components/ui/tab-selector';

const tabs: TabItemType[] = [
  { id: '1', label: 'Collections', value: 'collections' },
  { id: '2', label: 'Outfits', value: 'outfits' },
  { id: '3', label: 'Items', value: 'items' },
];

export default function MyComponent() {
  const [selectedTab, setSelectedTab] = useState('collections');

  return (
    <TabSelector
      tabs={tabs}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
    />
  );
}
```

### Advanced Customization

```tsx
<TabSelector
  tabs={tabs}
  selectedTab={selectedTab}
  onTabChange={setSelectedTab}
  containerStyle={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
  }}
  activeTextStyle={{
    fontWeight: '700',
    color: '#000000',
  }}
  indicatorStyle={{
    backgroundColor: '#FF6B6B',
    height: 3,
  }}
  animationDuration={400}
/>
```

## Props

### TabSelector Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItemType[]` | - | Array of tab items |
| `selectedTab` | `string` | - | Currently selected tab value |
| `onTabChange` | `(tabValue: string) => void` | - | Callback when tab changes |
| `containerStyle` | `object` | - | Custom container styles |
| `activeTabStyle` | `object` | - | Styles for active tab container |
| `inactiveTabStyle` | `object` | - | Styles for inactive tab container |
| `indicatorStyle` | `object` | - | Custom indicator styles |
| `textStyle` | `object` | - | Custom text styles |
| `activeTextStyle` | `object` | - | Custom active text styles |
| `animationDuration` | `number` | `300` | Animation duration in ms |

### TabItemType

```tsx
interface TabItem {
  id: string;
  label: string;
  value: string;
}
```

## Theme Integration

The component automatically uses your app's theme colors:

- `tabSelectorBackground` - Container background
- `tabSelectorBorder` - Container border
- `tabSelectorIndicator` - Sliding indicator
- `tabSelectorActiveText` - Active tab text
- `tabSelectorInactiveText` - Inactive tab text
- `tabSelectorShadow` - Container shadow

## Animation Details

- **Spring animations**: Uses `react-native-reanimated` for smooth, natural animations
- **Touch feedback**: Scales down on press for tactile feedback
- **Sliding indicator**: Smoothly animates between tab positions
- **Opacity transitions**: Smooth text opacity changes

## Dependencies

- `react-native-reanimated` (v4.1.0+)
- `@/hooks/use-theme-color` (included in project)
- `@/components/themed-text` (included in project)

## File Structure

```
components/ui/tab-selector/
├── index.ts              # Main exports
├── types.ts              # TypeScript definitions
├── TabSelector.tsx       # Main component
├── TabItem.tsx          # Individual tab component
├── SlidingIndicator.tsx # Animated indicator
└── README.md            # Documentation
```
