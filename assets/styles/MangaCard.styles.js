import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#140707',
    borderRadius: 18,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 76, 76, 0.25)',
    shadowColor: '#ff4d4d',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: '#1e0d0d',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff2f2',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
    color: '#ff9d9d',
    marginBottom: 8,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: '#e9d2d2',
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ff4d4d',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#ff4d4d',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
  },
});