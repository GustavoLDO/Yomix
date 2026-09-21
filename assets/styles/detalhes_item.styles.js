import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  textoVoltar: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  capa: {
    width: '100%',
    height: 350,
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  autor: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  tagTexto: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  sinopse: {
    fontSize: 14,
    color: '#CCC',
    lineHeight: 22,
    marginBottom: 24,
  },
  botaoFavorito: {
    backgroundColor: '#29293E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoFavoritado: {
    backgroundColor: '#E5A638',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});