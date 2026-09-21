import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from '../assets/styles/item_favorito.styles';

export default function ItemFavoritoScreen() {
  const params = useLocalSearchParams();

  const favoritos = params.favoritosData ? JSON.parse(params.favoritosData as string) : [];
  const imagens: { uri: string }[] = params.imagensData ? JSON.parse(params.imagensData as string) : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>⭐ Mangás Favoritados</Text>
      <Text style={styles.subtitle}>Total de obras em destaque: {favoritos.length}</Text>

      {imagens.length > 0 && (
        <View style={styles.galeriaSection}>
          <Text style={styles.sectionHeaderTitle}>Capas dos Favoritos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galeriaScroll}>
            {imagens.map((img, index) => (
              <Image key={index} source={img} style={styles.galeriaImage} />
            ))}
          </ScrollView>
        </View>
      )}

      {favoritos.map((item: any) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardDesc}>{item.descricao}</Text>
          </View>
        </View>
      ))}

      {favoritos.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum mangá favoritado no momento.</Text>
        </View>
      )}
    </ScrollView>
  );
}