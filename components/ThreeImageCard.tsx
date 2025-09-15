import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { cardHeight } from "../constants/appConstants";
import Card from "./Card";
type ThreeImageCardProps = {
  image1: string;
  image2: string;
  image3: string;
  save?: string;
}
const ThreeImageCard: React.FC<ThreeImageCardProps> = ({
  image1,
  image2,
  image3,
  save,
  ...rest
}) => {
  return (
    <Card
    save="bottom-right"
style={styles.card}
    {...rest}
    >
      <View style={styles.imageContainer}>
        <View
        style={styles.verticalImageContainer}
        >
          <Image source={image1} style={styles.verticalImage} />
        </View>
        <View
 style={styles.horizontalImageContainer}
        >
          <Image source={image2} style={styles.image} />
          <Image source={image3} style={styles.image} />
        </View>
      </View>
    </Card>
  );
};

export default ThreeImageCard;

const styles = StyleSheet.create({
    card:{
        height: cardHeight,
        width:'100%',
    },
    verticalImage: {
       flex:1,
    },
    horizontalImageContainer: {
        flex:2,
        justifyContent: "space-between",
        gap: 10,
        alignSelf:"stretch",
     
    },
    verticalImageContainer: {
        flex:3,
        justifyContent: "space-between",
        gap: 10,
    },
  imageContainer: {
    flex:1,
    flexDirection: "row",
    width: "100%",
    gap: 10,
    alignItems: "center",   
    justifyContent: "space-between",
  },
  image: {
   flex:1,
  },
});
