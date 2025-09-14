import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { cardHeight } from "@/constants/appConstants";

interface SingleImageCardProps {
  image: string;
  title?: string;
  price?: number;
}

const SingleImageCard = ({
  image,
  title,
  price,
}: SingleImageCardProps) => {
  return (
    <Card style={styles.card}
    save='top-right'
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

    </Card>
  );
};

export default SingleImageCard;

const styles = StyleSheet.create({
  card: {
    height: cardHeight*0.6,
    width: '100%',
    padding:0,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  textContainer: {
    paddingTop: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
});
