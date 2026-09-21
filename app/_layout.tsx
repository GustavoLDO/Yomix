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
        contentStyle: styles.contentContainer,
      }}
    >
      {/* Tela Inicial do Catálogo */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Mangás',
        }}
      />

      {/* Tela de Detalhes do Mangá (Recebe parâmetros de navegação) */}
      <Stack.Screen
        name="detalhes_item"
        options={{
          title: 'Detalhes do mangá',
        }}
      />

      {/* Tela com os itens salvos nos Favoritos */}
      <Stack.Screen
        name="item_favorito"
        options={{
          title: 'Favoritos',
        }}
      />

      {/* Tela de Formulário para Cadastrar Novo Item */}
      <Stack.Screen
        name="adicionar_item"
        options={{
          title: 'Adicionar',
        }}
      />
    </Stack>
  );
}