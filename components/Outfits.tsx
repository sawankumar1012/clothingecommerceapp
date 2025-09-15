import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { productCollectionMock } from '../constants/Mocks/productMock';
import ThreeImageCard from './ThreeImageCard';


export default function Outfits() {
  const renderOutfit = ({ item }: { item: any }) => (
    <View style={styles.cardWrapper}>
      <ThreeImageCard
        image1={item.products[0].imageUrl}
        image2={item.products[1].imageUrl}
        image3={item.products[2].imageUrl}
        
      />
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={productCollectionMock.workOutfits}
        renderItem={renderOutfit}
        keyExtractor={(item, index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  
  },
  flatList: {
    width: "100%",
  },
  flatListContainer: {
    gap: 12,
  
    paddingBottom: 20,
  },
  cardWrapper: {
    width: '100%',
  },
  description: {
    textAlign: 'center',
    opacity: 0.7,
    paddingHorizontal: 20,
  },
});
