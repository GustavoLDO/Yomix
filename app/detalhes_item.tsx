import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MANGAS_DATA } from './index';
import { styles } from '../assets/styles/detalhes_item.styles';

/**
 * Tela de Detalhes do item selecionado.
 * Obtém o parâmetro 'id' enviado pela navegação para buscar os dados correspondentes.
 */
export default function DetalhesItemScreen() {
  const router = useRouter();
  // Resgate dos parâmetros da rota com useLocalSearchParams
  const { id } = useLocalSearchParams<{ id: string }>();

  // Busca do item com base no id recebido por parâmetro
  const manga = MANGAS_DATA.find((item) => item.id === id) || MANGAS_DATA[0];

  // Estado para controlar se o item está favoritado
  const [isFavorito, setIsFavorito] = useState(manga.favorito);

  const handleToggleFavorito = () => {
    setIsFavorito(!isFavorito);
    Alert.alert('Yomix', !isFavorito ? 'Mangá adicionado aos favoritos!' : 'Mangá removido dos favoritos!');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Imagem de Capa do Mangá */}
        <Image source={{ uri: manga.imagem }} style={styles.image} resizeMode="cover" />

        {/* Título e Informações Gerais */}
        <Text style={styles.title}>{manga.nome}</Text>
        <Text style={styles.metaText}>
          {manga.genero} • {manga.capitulosDetalhe}
        </Text>
        <Text style={styles.autorText}>Autor: {manga.autor}</Text>

        {/* Seção da Sinopse */}
        <Text style={styles.sectionTitle}>Sinopse</Text>
        <Text style={styles.description}>{manga.sinopseCompleta}</Text>

        {/* Lista de Personagens Principais */}
        <Text style={styles.sectionTitle}>Personagens Principais</Text>
        {manga.personagens.map((personagem, index) => (
          <Text key={index} style={styles.listItem}>
            • {personagem}
          </Text>
        ))}

        {/* Botão de Ação para Favoritar */}
        <TouchableOpacity
          style={[styles.favButton, isFavorito && styles.favButtonActive]}
          onPress={handleToggleFavorito}
          activeOpacity={0.8}
        >
          <Text style={styles.favButtonText}>
            {isFavorito ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={styles.navText}>Mangás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/item_favorito')}>
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={styles.navText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}