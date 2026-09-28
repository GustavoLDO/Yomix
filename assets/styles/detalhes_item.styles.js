import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#090909',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 18,
    paddingBottom: 90,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff2f2',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 13,
    color: '#ff9d9d',
    marginBottom: 4,
    fontWeight: '700',
  },
  autorText: {
    fontSize: 13,
    color: '#e9d2d2',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff2f2',
    marginTop: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#f2d9d9',
    lineHeight: 22,
  },
  listItem: {
    fontSize: 14,
    color: '#f2d9d9',
    marginBottom: 6,
  },
  favButton: {
    backgroundColor: '#b90d0d',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#b90d0d',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  favButtonActive: {
    backgroundColor: '#ff4d4d',
  },
  favButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.7,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#120808',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  navText: {
    fontSize: 12,
    color: '#d8c1c1',
    fontWeight: '600',
  },
});