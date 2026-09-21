import React from 'react';
import { Stack } from 'expo-router';
import { styles } from '../assets/styles/layout.styles.js';

export default function LayoutRaiz() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.headerContainer,
        headerTintColor: '#6C5CE7',
        headerTitleStyle: styles.headerTitle,
        headerBackTitleVisible: false,
        contentStyle: { backgroundColor: '#13131A' },
      }}
    >
      {/* Tela Principal (Base da Pilha) */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Oculta o header nativo para usar o header personalizado da home
        }}
      />

      {/* Tela de Detalhes (Empilhada no topo da Home) */}
      <Stack.Screen
        name="detalhes_item"
        options={{
          title: 'Detalhes do Lab',
          headerShown: true,
        }}
      />

      {/* Tela de Adicionar Item (Empilhada no topo) */}
      <Stack.Screen
        name="adicionar_item"
        options={{
          title: 'Novo Laboratório',
          headerShown: true,
          presentation: 'card', // Transição padrão de cartão empilhado
        }}
      />

      {/* Tela de Item Destaque / Favorito */}
      <Stack.Screen
        name="item_favorito"
        options={{
          title: 'Lab em Destaque',
          headerShown: true,
        }}
      />
    </Stack>
  );
}