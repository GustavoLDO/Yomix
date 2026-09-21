import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styles } from '../assets/styles/detalhes_item.styles.js';

export default function TelaDetalhes() {
  const router = useRouter();
  
  const params = useLocalSearchParams<{
    id?: string;
    titulo?: string;
    autor?: string;
    genero?: string;
    capitulos?: string;
    sinopse?: string;
    imagem?: string;
  }>();

  const [ehFavorito, setEhFavorito] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <Image 
        source={{ uri: params.imagem || 'https://via.placeholder.com/300' }} 
        style={styles.capa} 
        resizeMode="cover"
      />

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{params.titulo}</Text>
        <Text style={styles.autor}>Autor: {params.autor}</Text>

        <View style={styles.tagContainer}>
          <View style={styles.tag}><Text style={styles.tagTexto}>{params.genero}</Text></View>
          <View style={styles.tag}><Text style={styles.tagTexto}>{params.capitulos} Capítulos</Text></View>
        </View>

        <Text style={styles.secaoTitulo}>Sinopse</Text>
        <Text style={styles.sinopse}>{params.sinopse}</Text>

        <TouchableOpacity 
          style={[styles.botaoFavorito, ehFavorito && styles.botaoFavoritado]} 
          onPress={() => setEhFavorito(!ehFavorito)}
        >
          <Text style={styles.textoBotao}>
            {ehFavorito ? '★ Favoritado' : '☆ Adicionar aos Favoritos'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}