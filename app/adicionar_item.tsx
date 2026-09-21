import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles/adicionar_item.styles';

export default function AdicionarItemScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Novo Mangá</Text>
    </View>
  );
}