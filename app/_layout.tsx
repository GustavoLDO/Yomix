import React from 'react';
import { Stack } from 'expo-router';
import { styles } from '../assets/styles/layout.styles';

/**
 * Componente Raiz de Navegação que define a Stack principal do Yomix.
 * Configura as opções do cabeçalho e estilização global de cada rota.
 */
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.headerContainer,
        headerTintColor: '#007AFF',
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