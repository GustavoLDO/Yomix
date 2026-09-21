import React from 'react';
import { Stack } from 'expo-router';
import { styles } from '../assets/styles/layout.styles';

export default function LayoutRaiz() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.headerContainer,
        headerTintColor: '#6C5CE7',
        headerTitleStyle: styles.headerTitle,
        headerBackButtonDisplayMode: 'minimal',
        headerBackTitle: '',
        contentStyle: { backgroundColor: '#13131A' },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="detalhes_item" options={{ title: 'Detalhes do Mangá', headerShown: true }} />
      <Stack.Screen name="adicionar_item" options={{ title: 'Novo Mangá', headerShown: true }} />
      <Stack.Screen name="item_favorito" options={{ title: 'Mangás em Destaque', headerShown: true }} />
    </Stack>
  );
}