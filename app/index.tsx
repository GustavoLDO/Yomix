import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MangaCard from '../components/MangaCard';
import { styles } from '../assets/styles/index.styles';

const MANGAS_INICIAIS = [
  {
    id: '1',
    nome: 'One Piece',
    descricao: 'A jornada de Monkey D. Luffy para se tornar o Rei dos Piratas.',
    favorito: true,
    imagem: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500',
  },
  {
    id: '2',
    nome: 'Jujutsu Kaisen',
    descricao: 'Estudantes enfrentam maldições perigosas para proteger a humanidade.',
    favorito: false,
    imagem: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500',
  },
  {
    id: '3',
    nome: 'Demon Slayer',
    descricao: 'Tanjiro luta para curar a sua irmã e derrotar os demónios.',
    favorito: true,
    imagem: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500',
  },
  {
    id: '4',
    nome: 'Attack on Titan',
    descricao: 'A humanidade luta pela sobrevivência contra os Titãs.',
    favorito: false,
    imagem: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [mangas, setMangas] = useState(MANGAS_INICIAIS);

  const toggleFavorito = (id: string) => {
    setMangas((prevMangas) =>
      prevMangas.map((manga) =>
        manga.id === id ? { ...manga, favorito: !manga.favorito } : manga
      )
    );
  };

  const mangasFavoritos = mangas.filter((manga) => manga.favorito);
  const imagens = mangasFavoritos.map((manga) => ({ uri: manga.imagem }));

  const irParaTelaDestaques = () => {
    router.push({
      pathname: '/item_favorito',
      params: {
        favoritosData: JSON.stringify(mangasFavoritos),
        imagensData: JSON.stringify(imagens),
      },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catálogo de Mangás</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={styles.addButtonText}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      {mangasFavoritos.length > 0 && (
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>⭐ Em Destaque ({mangasFavoritos.length})</Text>
            <TouchableOpacity onPress={irParaTelaDestaques}>
              <Text style={styles.verMaisText}>Ver Destaques →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.destaqueContainer}>
            {mangasFavoritos.map((manga) => (
              <TouchableOpacity
                key={manga.id}
                style={styles.destaqueCard}
                onPress={() => router.push({ pathname: '/detalhes_item', params: { id: manga.id, nome: manga.nome } })}
              >
                <Image source={{ uri: manga.imagem }} style={styles.destaqueImage} />
                <View style={styles.destaqueHeader}>
                  <Text style={styles.destaqueTag}>DESTAQUE</Text>
                  <TouchableOpacity onPress={() => toggleFavorito(manga.id)}>
                    <Text style={styles.starIcon}>★</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.destaqueNome} numberOfLines={1}>{manga.nome}</Text>
                <Text style={styles.destaqueDescricao} numberOfLines={2}>{manga.descricao}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Todos os Mangás</Text>
        {mangas.map((item) => (
          <MangaCard
            key={item.id}
            manga={item}
            onPress={() => router.push({ pathname: '/detalhes_item', params: { id: item.id, nome: item.nome } })}
            onToggleFavorito={() => toggleFavorito(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}