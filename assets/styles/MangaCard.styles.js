import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2C',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  capa: {
    width: 80,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  genero: {
    fontSize: 12,
    color: '#FF6B6B',
    marginVertical: 4,
  },
  sinopse: {
    fontSize: 13,
    color: '#AAA',
    marginBottom: 8,
  },
  botaoDetalhes: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});