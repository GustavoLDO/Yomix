import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    marginBottom: 16,
  },
  tituloHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#888',
  },
  acoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  botaoAcao: {
    flex: 1,
    backgroundColor: '#29293E',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 6,
  },
  botaoFavoritos: {
    marginRight: 0,
    marginLeft: 6,
    backgroundColor: '#3E2938',
  },
  textoBotaoAcao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  listaContainer: {
    paddingBottom: 20,
  },
});