import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  metaText: {
    fontSize: 13,
    color: '#FF9000',
    fontWeight: '600',
    marginBottom: 2,
  },
  autorText: {
    fontSize: 13,
    color: '#A8A8B3',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#E1E1E6',
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    color: '#A8A8B3',
    marginBottom: 4,
  },
  favButton: {
    backgroundColor: '#8257E5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  favButtonActive: {
    backgroundColor: '#E53E3E',
  },
  favButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#202024',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#29292E',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#A8A8B3',
  },
});