import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import MangaCard from '../components/MangaCard';
import { styles } from '../assets/styles/index.styles';

// Dados estáticos do catálogo Yomix (sem exibição de datas)
export const MANGAS_DATA = [
  {
    id: '1',
    nome: 'One Piece',
    genero: 'Aventura / Shonen',
    capitulos: '1100+ caps',
    descricao: 'Uma jornada épica pelo oceano em busca do tesouro supremo.',
    sinopseCompleta: 'Monkey D. Luffy recruta uma tripulação para explorar o oceano e encontrar o lendário tesouro conhecido como One Piece.',
    capitulosDetalhe: '1100+ capítulos',
    autor: 'Eiichiro Oda',
    personagens: ['Luffy', 'Zoro', 'Nami', 'Sanji'],
    imagem: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600',
    favorito: true,
  },
  {
    id: '2',
    nome: 'Jujutsu Kaisen',
    genero: 'Ação / Sobrenatural',
    capitulos: '250+ caps',
    descricao: 'Feiticeiros enfrentam maldições perigosas para proteger a humanidade.',
    sinopseCompleta: 'Yuji Itadori engole um talismã amaldiçoado e entra no mundo dos Feiticeiros Jujutsu para combater maldições.',
    capitulosDetalhe: '250+ capítulos',
    autor: 'Gege Akutami',
    personagens: ['Itadori', 'Gojo', 'Megumi', 'Nobara'],
    imagem: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600',
    favorito: false,
  },
];

/**
 * Tela Principal do Catálogo Yomix.
 * Apresenta a lista com FlatList e a navegação entre as telas.
 */
export default function IndexScreen() {
  const router = useRouter();
  const [mangas] = useState(MANGAS_DATA);

  return (
    <View style={styles.container}>
      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MangaCard manga={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800' }}
            style={styles.banner}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerTitle}>Meus Mangás</Text>
              <Text style={styles.bannerSubtitle}>Encontre algo incrível para ler!</Text>
            </View>
          </ImageBackground>
        }
      />

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={[styles.navText, styles.activeNavText]}>Mangás</Text>
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