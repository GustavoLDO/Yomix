import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../assets/styles/MangaCard.styles';

/**
 * Componente reutilizável para renderização de cada card de mangá na FlatList.
 * Recolhe as propriedades do objeto 'manga' e utiliza o hook 'useRouter' para navegar.
 */
export default function MangaCard({ manga }) {
  const router = useRouter();

  // Redireciona para a tela de detalhes passando o ID como parâmetro de busca
  const handleVerManga = () => {
    router.push({
      pathname: '/detalhes_item',
      params: { id: manga.id },
    });
  };

  return (
    <View style={styles.cardContainer}>
      {/* Exibição da imagem de capa do mangá */}
      <Image source={{ uri: manga.imagem }} style={styles.cardImage} resizeMode="cover" />

      {/* Conteúdo com os dados informativos do item */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{manga.nome}</Text>
        <Text style={styles.cardMeta}>
          {manga.genero} • {manga.capitulos}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {manga.descricao}
        </Text>

        {/* Botão para acessar a tela de detalhes do mangá */}
        <TouchableOpacity style={styles.button} onPress={handleVerManga} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Ver mangá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}