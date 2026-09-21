import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MangaCard } from '../components/MangaCard';
import { styles } from '../assets/styles/index.styles.js';

const ARRAY_INICIAL = [
  {
    id: '1',
    titulo: 'One Piece',
    autor: 'Eiichiro Oda',
    genero: 'Aventura / Shonen',
    capitulos: '1100',
    sinopse: 'Luffy e a sua tripulação navegam pelos mares em busca do lendário tesouro One Piece.',
    imagem: 'https://images.justwatch.com/poster/305888257/s718/one-piece-1999.fpx'
  },
  {
    id: '2',
    titulo: 'Naruto',
    autor: 'Masashi Kishimoto',
    genero: 'Ação / Ninja',
    capitulos: '700',
    sinopse: 'Um jovem ninja determinado a tornar-se o líder da sua aldeia e ganhar o respeito de todos.',
    imagem: 'https://m.media-amazon.com/images/M/MVBmMjM1MGI4MDYtMDc5Yy00MDYzLWIxMGMtYTUyNTgzM2ZhYWE3XkEyXkFqcGc@._V1_.jpg'
  }
];

export default function TelaInicial() {
  const router = useRouter();
  const params = useLocalSearchParams<{ novoItem?: string }>();

  const [mangas, setMangas] = useState<any[]>(ARRAY_INICIAL);

  useEffect(() => {
    if (params.novoItem) {
      const novoManga = JSON.parse(params.novoItem);
      
      setMangas((listaAnterior) => {
        const jaExiste = listaAnterior.some((item) => item.id === novoManga.id);
        if (!jaExiste) {
          return [novoManga, ...listaAnterior];
        }
        return listaAnterior;
      });
    }
  }, [params.novoItem]);

  const irParaDetalhes = (item: any) => {
    router.push({
      pathname: '/detalhes_item',
      params: {
        id: item.id,
        titulo: item.titulo,
        autor: item.autor,
        genero: item.genero,
        capitulos: item.capitulos,
        sinopse: item.sinopse,
        imagem: item.imagem,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Yomix 📚</Text>
        <Text style={styles.subtituloHeader}>Catálogo de Mangás</Text>
      </View>

      <View style={styles.acoesContainer}>
        <TouchableOpacity 
          style={styles.botaoAcao} 
          onPress={() => router.push('/adicionar_item')}
        >
          <Text style={styles.textoBotaoAcao}>+ Cadastrar Mangá</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botaoAcao, styles.botaoFavoritos]} 
          onPress={() => router.push('/item_favorito')}
        >
          <Text style={styles.textoBotaoAcao}>★ Destaque</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MangaCard 
            manga={item} 
            onPress={() => irParaDetalhes(item)} 
          />
        )}
        contentContainerStyle={styles.listaContainer}
      />
    </View>
  );
}