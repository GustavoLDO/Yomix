import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../assets/styles/MangaCard.styles';

export default function MangaCard({ manga, onPress, onToggleFavorito }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: manga.imagem }} style={styles.cardImage} />
      
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardNome} numberOfLines={1}>{manga.nome}</Text>
          <TouchableOpacity onPress={onToggleFavorito} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Text style={manga.favorito ? styles.starActive : styles.starInactive}>
              {manga.favorito ? '★' : '☆'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardDescricao} numberOfLines={2}>{manga.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}