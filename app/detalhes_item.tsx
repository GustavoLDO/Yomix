import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from '../assets/styles/detalhes_item.styles';

export default function DetalhesItemScreen() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.nome || 'Detalhes do Mangá'}</Text>
      <Text style={styles.text}>ID: {params.id}</Text>
    </View>
  );
}