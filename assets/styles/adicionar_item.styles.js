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
  formulario: {
    gap: 12,
  },
  label: {
    color: '#AAA',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1E1E2C',
    borderRadius: 8,
    padding: 12,
    color: '#FFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  inputArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoSalvar: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  textoBotaoSalvar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});