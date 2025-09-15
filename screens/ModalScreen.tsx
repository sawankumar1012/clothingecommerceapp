import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function ModalScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="lg">This is a modal</ThemedText>
      <TouchableOpacity 
        style={styles.link}
        onPress={() => navigation.goBack()}
      >
        <ThemedText type="md" style={styles.linkText}>Go to home screen</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#0a7ea4',
    fontSize: 16,
    lineHeight: 30,
  },
});
