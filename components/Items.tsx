import React, { useCallback, useMemo, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { optionsMock } from "../constants/Mocks/optionsMock";
import { productCollectionMock } from "../constants/Mocks/productMock";
import ArrowDownChipButton from "./ArrowDownChipButton";
import SingleImageCard from "./SingleImageCard";

export default function Items() {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const handlePress = useCallback((option: any) => {
    setSelectedOption(option.value);
  }, []);

  // Flatten all products from different categories
  const allProducts = useMemo(() => {
    const products: any[] = [];
    Object.values(productCollectionMock).forEach((category: any) => {
      category.forEach((collection: any) => {
        collection.products.forEach((product: any) => {
          products.push(product);
        });
      });
    });
    return products;
  }, []);

  const renderCard = ({ item }: { item: any }) => (
    <View style={styles.cardWrapper}>
      <SingleImageCard
        image={item.imageUrl}
        title={item.name}
        price={item.price}
      />
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {optionsMock.map((option) => (
          <ArrowDownChipButton
            key={option.id}
            label={option.label}
            variant={selectedOption === option.value ? "primary" : "outline"}
            onPress={() => handlePress(option)}
          />
        ))}
      </ScrollView>
      <FlatList
        data={allProducts}
        renderItem={renderCard}
        keyExtractor={(item,index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex:1,
  },
  description: {
    textAlign: "center",
    opacity: 0.7,
    paddingHorizontal: 20,
  },
  scrollView: {
    width: "100%",
    height: 50,
  },
  scrollContainer: {
    gap: 8,
  },
  flatList: {

  },
  flatListContainer: {
    gap: 12,
    paddingHorizontal: 10,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 6,
  },
});
