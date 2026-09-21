import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 20,
  },
  botaoVoltar: {
    marginTop: 30,
    marginBottom: 10,
  },
  textoVoltar: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  tituloTela: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  cardFavorito: {
    backgroundColor: '#1E1E2C',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  capa: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  autor: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#29293E',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  infoLabel: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoTexto: {
    color: '#CCC',
    fontSize: 14,
  },
});