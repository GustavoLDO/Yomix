import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../assets/styles/adicionar_item.styles.js';

export default function TelaAdicionarItem() {
  const router = useRouter();

  const [titulo, setTitulo] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [capitulos, setCapitulos] = useState<string>('');
  const [sinopse, setSinopse] = useState<string>('');
  const [imagem, setImagem] = useState<string>('');

  const cadastrarManga = () => {
    if (!titulo || !autor) return;

    const novoManga = {
      id: String(Date.now()),
      titulo,
      autor,
      genero: genero || 'Geral',
      capitulos: capitulos || '0',
      sinopse: sinopse || 'Sem sinopse cadastrada.',
      imagem: imagem || 'https://via.placeholder.com/150',
    };

    router.push({
      pathname: '/',
      params: { novoItem: JSON.stringify(novoManga) },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.tituloTela}>Cadastrar Novo Mangá</Text>

      <View style={styles.formulario}>
        <Text style={styles.label}>Título *</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do Mangá" 
          placeholderTextColor="#666" 
          value={titulo} 
          onChangeText={setTitulo} 
        />

        <Text style={styles.label}>Autor *</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do Autor" 
          placeholderTextColor="#666" 
          value={autor} 
          onChangeText={setAutor} 
        />

        <Text style={styles.label}>Gênero</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ex: Ação, Fantasia" 
          placeholderTextColor="#666" 
          value={genero} 
          onChangeText={setGenero} 
        />

        <Text style={styles.label}>Capítulos</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Quantidade de capítulos" 
          placeholderTextColor="#666" 
          keyboardType="numeric" 
          value={capitulos} 
          onChangeText={setCapitulos} 
        />

        <Text style={styles.label}>URL da Imagem</Text>
        <TextInput 
          style={styles.input} 
          placeholder="https://imagem.com/capa.jpg" 
          placeholderTextColor="#666" 
          value={imagem} 
          onChangeText={setImagem} 
        />

        <Text style={styles.label}>Sinopse</Text>
        <TextInput 
          style={[styles.input, styles.inputArea]} 
          placeholder="Resumo da história..." 
          placeholderTextColor="#666" 
          multiline 
          numberOfLines={4} 
          value={sinopse} 
          onChangeText={setSinopse} 
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={cadastrarManga}>
          <Text style={styles.textoBotaoSalvar}>Adicionar ao Catálogo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}