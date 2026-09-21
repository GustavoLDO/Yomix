import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  listContent: {
    padding: 16,
    paddingBottom: 70,
  },
  banner: {
    height: 140,
    marginBottom: 16,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(18, 18, 20, 0.75)',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#A8A8B3',
    fontSize: 14,
    marginTop: 4,
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
  activeNavText: {
    color: '#8257E5',
    fontWeight: 'bold',
  },
});