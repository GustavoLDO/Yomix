import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
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
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlucOEenm_acJXAxEP_UzLB6gUnngYxKBfi-agVEiqUg&s=10',
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
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFPuHq2vslZG8vAqowImdEHRkwDvF6VmT6dvIighNlw&s=10',
    favorito: false,
  },
  {
    id: '3',
    nome: 'Attack on Titan',
    genero: 'Ação / Drama',
    capitulos: '87+ caps',
    descricao: 'Humanidade luta contra monstros gigantes em uma guerra desesperadora.',
    sinopseCompleta: 'Em um mundo cercado por enormes criaturas, sobreviventes se unem para tentar recuperar sua liberdade e entender a origem do terror.',
    capitulosDetalhe: '87+ capítulos',
    autor: 'Hajime Isayama',
    personagens: ['Eren', 'Mikasa', 'Armin', 'Levi'],
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyTt8_tJDgOFzDPM9cnTRw7XQt_J_mvk94Dp_oEbvdg&s=10https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=900&q=80',
    favorito: false,
  },
  {
    id: '4',
    nome: 'Demon Slayer',
    genero: 'Fantasia / Ação',
    capitulos: '200+ caps',
    descricao: 'Uma jornada emocional para derrotar demônios e salvar a família.',
    sinopseCompleta: 'Tanjiro Kamado segue em busca de vingança e cura, enquanto enfrenta criaturas infernais em um mundo de destruição.',
    capitulosDetalhe: '200+ capítulos',
    autor: 'Koyoharu Gotouge',
    personagens: ['Tanjiro', 'Nezuko', 'Zenitsu', 'Inosuke'],
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpFL3f85Y1YEyGY4vFQJmxt01V1v1Xyo6us-epKNnaw&s=10',
    favorito: false,
  },
];

export const addManga = (novoManga: {
  id: string;
  nome: string;
  genero: string;
  capitulos: string;
  descricao: string;
  sinopseCompleta: string;
  capitulosDetalhe: string;
  autor: string;
  personagens: string[];
  imagem: string;
  favorito: boolean;
}) => {
  MANGAS_DATA.unshift(novoManga);
};

/**
 * Tela Principal do Catálogo Yomix.
 * Apresenta a lista com FlatList e a navegação entre as telas.
 */
export default function IndexScreen() {
  const router = useRouter();
  const [mangas, setMangas] = useState(MANGAS_DATA);

  useFocusEffect(
    useCallback(() => {
      setMangas([...MANGAS_DATA]);
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MangaCard manga={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Yomix</Text>
          </View>
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