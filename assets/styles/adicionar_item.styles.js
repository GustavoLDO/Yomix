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
  formTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff2f2',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  input: {
    backgroundColor: 'rgba(31, 10, 10, 0.9)',
    borderColor: 'rgba(255, 77, 77, 0.5)',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: '#fff2f2',
  },
  textArea: {
    height: 110,
  },
  submitButton: {
    backgroundColor: '#b90d0d',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 18,
    shadowColor: '#b90d0d',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.8,
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
  activeNavText: {
    color: '#ff4d4d',
    fontWeight: '800',
  },
});