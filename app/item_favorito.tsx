import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../assets/style/item_favorito.styles';

export default function TelaItemFavorito() {
  const router = useRouter();

  const mangaDestaque = {
    titulo: 'Demon Slayer',
    autor: 'Koyoharu Gotouge',
    genero: 'Ação / Sobrenatural',
    capitulos: '205',
    imagem: 'https://m.media-amazon.com/images/M/MVBmMzU5N2JjOTAtY2JjZS00Y2E4LTg1M2ItZGY1M2ZhYTJmNWNmXkEyXkFqcGc@._V1_.jpg'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.tituloTela}>★ Mangá em Destaque</Text>

      <View style={styles.cardFavorito}>
        <Image source={{ uri: mangaDestaque.imagem }} style={styles.capa} />
        <Text style={styles.nome}>{mangaDestaque.titulo}</Text>
        <Text style={styles.autor}>Autor: {mangaDestaque.autor}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Gênero:</Text>
          <Text style={styles.infoTexto}>{mangaDestaque.genero}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Capítulos:</Text>
          <Text style={styles.infoTexto}>{mangaDestaque.capitulos}</Text>
        </View>
      </View>
    </View>
  );
}