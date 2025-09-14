import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThreeImageCard from './ThreeImageCard'

const RenderCards = ({item}: {item: any}) => {
  return (
    <ThreeImageCard
    save='bottom-right'
              image1={item.products[0].imageUrl}
              image2={item.products[1].imageUrl}
              image3={item.products[2].imageUrl}
            />
  )
}

export default RenderCards

const styles = StyleSheet.create({})