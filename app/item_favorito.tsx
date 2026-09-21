import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MangaCard from '../components/MangaCard';
import { MANGAS_DATA } from './index';
import { styles } from '../assets/styles/item_favorito.styles';

/**
 * Tela de Favoritos responsável por listar apenas os mangás marcados como favoritos.
 */
export default function ItemFavoritoScreen() {
  const router = useRouter();

  // Filtragem dos itens cujo parâmetro 'favorito' é verdadeiro
  const favoritos = MANGAS_DATA.filter((manga) => manga.favorito);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Minhas favoritas</Text>

      {/* Apresentação da lista de favoritos com FlatList */}
      {favoritos.length > 0 ? (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MangaCard manga={item} />}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum mangá favoritado até o momento.</Text>
        </View>
      )}

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={styles.navText}>Mangás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/item_favorito')}>
          <Text style={[styles.navText, styles.activeNavText]}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={styles.navText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}