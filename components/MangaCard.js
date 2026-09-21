import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/MangaCard.styles.js';

export function MangaCard({ manga, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: manga.imagem }} style={styles.capa} />

      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{manga.titulo}</Text>
        <Text style={styles.genero}>{manga.genero} • {manga.capitulos} Caps</Text>
        <Text style={styles.sinopse} numberOfLines={2}>
          {manga.sinopse}
        </Text>
        
        <View style={styles.botaoDetalhes}>
          <Text style={styles.textoBotao}>Ver detalhes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}