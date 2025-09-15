import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Collections from '../../components/Collections';
import Items from '../../components/Items';
import Outfits from '../../components/Outfits';
import { ThemedText } from '../../components/themed-text';
import Background from '../../components/ui/Background';
import { TabItemType, TabSelector } from '../../components/ui/tab-selector';

const TABS: TabItemType[] = [
  { id: '1', label: 'Collections', value: 'collections' },
  { id: '2', label: 'Outfits', value: 'outfits' },
  { id: '3', label: 'Items', value: 'items' },
];

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('collections');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'collections':
        return <Collections />;
      case 'outfits':
        return <Outfits />;
      case 'items':
        return <Items />;
      default:
        return null;
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <ThemedText type="xl" style={styles.title}>
          Saved
        </ThemedText>
        
        <TabSelector
          tabs={TABS}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          containerStyle={styles.tabSelector}
        />

      
          {renderTabContent()}
     
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 24,
  },
  tabSelector: {
    marginBottom: 24,
  },
  scrollView: {
    flex: 1,
  },
});
