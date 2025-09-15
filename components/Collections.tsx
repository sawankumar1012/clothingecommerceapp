import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { collectionsMock } from "../constants/Mocks/optionsMock";
import { productCollectionMock } from "../constants/Mocks/productMock";
import IconChipButton from "./IconChipButton";
import RenderCards from "./RenderCards";

export default function Collections() {
  const [selectedCollection, setSelectedCollection] =
    useState<any>("workOutfits");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const { width: screenWidth } = Dimensions.get("window");
  const pageWidth = screenWidth - 40; // Consistent page width with padding

  const handlePress = useCallback((option: any) => {
    const index = collectionsMock.findIndex(
      (item) => item.value === option.value
    );
    if (index !== -1) {
      setSelectedCollection(option.value);
      setCurrentIndex(index);
      flatListRef.current?.scrollToIndex({ index, animated: true });
      
      // // Scroll the tab to center the selected item
      // const chipWidth = 120; // Approximate width of each chip button
      // const scrollOffset = Math.max(0, (index * chipWidth) - 20);
      // // scrollViewRef.current?.scrollTo({ x: scrollOffset, animated: true });
    }
  }, []);

  const handleMomentumScrollEnd = useCallback(
    (event: any) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / pageWidth);
      if (index >= 0 && index < collectionsMock.length) {
        const newCollection = collectionsMock[index].value;
        setSelectedCollection(newCollection);
        setCurrentIndex(index);
        const chipWidth = 120;
        const scrollOffset = Math.max(0, (index * chipWidth) + 50);
        scrollViewRef.current?.scrollTo({ x: scrollOffset, animated: true });
      }
    },
    [pageWidth]
  );

  console.log("selectedCollection", selectedCollection);

  const allCollectionsData = useMemo(() => collectionsMock.map((collection) => ({
    collection: collection.value,
    data: productCollectionMock[
      collection.value as keyof typeof productCollectionMock
    ],
  })), []);

  return (
    <View style={styles.contentContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        
      >
        <IconChipButton
          label="+ Add New"
          variant="dashed"
          onPress={() => {}}
          icon={undefined}
        />

        {collectionsMock.map((option: any) => (
          <IconChipButton
            key={option.id}
            label={option.label}
            variant={
              selectedCollection === option.value ? "primary" : "outline"
            }
            icon={option.icon}
            onPress={() => handlePress(option)}
          />
        ))}
      </ScrollView>

      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={allCollectionsData}
        keyExtractor={(item, index) => item.collection + index}
        renderItem={({ item }) => (
          <View style={[styles.pageContainer, { width: pageWidth }]}>
            <FlatList
              style={styles.flatList}
              contentContainerStyle={styles.flatListContainer}
              data={item.data}
              keyExtractor={(dataItem, index) => `${item.collection}-${dataItem.id +index}`}
              renderItem={({ item: dataItem }: { item: any }) => (
                <RenderCards item={dataItem} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        decelerationRate="fast"
        snapToInterval={pageWidth}
        snapToAlignment="start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
  
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",

  },
  scrollContainer: {
    gap: 12,
    height: 50,
  },
  scrollView: {
    width: "100%",
   height:60,
  },
  description: {
    textAlign: "center",
    opacity: 0.7,
    paddingHorizontal: 20,
  },
  flatListContainer: {
    paddingTop:5,
    gap: 12,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  pageContainer: {

    alignItems: "center",
 
    
  },
});
