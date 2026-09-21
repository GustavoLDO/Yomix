import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../assets/styles/adicionar_item.styles';

/**
 * Tela de Cadastro para novos mangás.
 * Utiliza o hook useState para gerenciar de forma controlada cada campo do formulário.
 */
export default function AdicionarItemScreen() {
  const router = useRouter();

  // Definição dos estados locais para controle dos campos do formulário via useState
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [capitulos, setCapitulos] = useState('');
  const [descricao, setDescricao] = useState('');
  const [personagens, setPersonagens] = useState('');
  const [autor, setAutor] = useState('');

  // Função para tratar a submissão dos dados do formulário
  const handleCadastrar = () => {
    // Validação de preenchimento básico dos campos
    if (!nome.trim() || !genero.trim() || !capitulos.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha os campos de Nome, Gênero e Capítulos.');
      return;
    }

    Alert.alert('Sucesso', 'Mangá cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => {
          // Limpeza dos estados do formulário
          setNome('');
          setGenero('');
          setCapitulos('');
          setDescricao('');
          setPersonagens('');
          setAutor('');
          // Navegação de volta para a tela inicial do catálogo
          router.push('/');
        },
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.formTitle}>Novo mangá</Text>

        {/* Input: Nome do Mangá */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Nome do mangá"
            placeholderTextColor="#8E8E93"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Input: Gênero */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Gênero"
            placeholderTextColor="#8E8E93"
            value={genero}
            onChangeText={setGenero}
          />
        </View>

        {/* Input: Capítulos */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Quantidade de capítulos"
            placeholderTextColor="#8E8E93"
            value={capitulos}
            onChangeText={setCapitulos}
          />
        </View>

        {/* Input: Autor */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#8E8E93"
            value={autor}
            onChangeText={setAutor}
          />
        </View>

        {/* Input: Descrição */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            placeholderTextColor="#8E8E93"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        {/* Input: Personagens */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Personagens principais (separados por vírgula)"
            placeholderTextColor="#8E8E93"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={personagens}
            onChangeText={setPersonagens}
          />
        </View>

        {/* Botão de Cadastro */}
        <TouchableOpacity style={styles.submitButton} onPress={handleCadastrar} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>CADASTRAR MANGÁ</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Text style={styles.navText}>Mangás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/item_favorito')}>
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/adicionar_item')}>
          <Text style={[styles.navText, styles.activeNavText]}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}