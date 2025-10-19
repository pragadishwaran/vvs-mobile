import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  // Card styles
  card: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#666',
  },

  // Header styles
  header: {
    padding: 16,
    backgroundColor: '#0f4c81',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Product Card styles
  productCard: {
    padding: 12,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    marginTop: 6,
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  // Donate Button styles
  donateButton: {
    marginTop: 20,
    backgroundColor: '#FEB003',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  donateButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  // Image Gallery styles
  galleryContainer: {
    padding: 10,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  galleryImageContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  galleryImage: {
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },

  // YouTube Player styles
  youtubeContainer: {
    height: 220,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
    alignSelf: 'stretch',
  },
  youtubeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  youtubeNoImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  youtubePlayOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Common layout styles
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },

  // Text styles
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  caption: {
    fontSize: 12,
    color: '#666',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },

  // Spacing
  marginTop8: { marginTop: 8 },
  marginTop12: { marginTop: 12 },
  marginTop16: { marginTop: 16 },
  marginTop20: { marginTop: 20 },
  marginBottom8: { marginBottom: 8 },
  marginBottom12: { marginBottom: 12 },
  marginBottom16: { marginBottom: 16 },
  marginBottom20: { marginBottom: 20 },
  padding8: { padding: 8 },
  padding12: { padding: 12 },
  padding16: { padding: 16 },
  padding20: { padding: 20 },

  // Colors
  primary: { color: '#333' },
  secondary: { color: '#666' },
  accent: { color: '#007AFF' },
  success: { color: '#28a745' },
  warning: { color: '#ffc107' },
  danger: { color: '#dc3545' },
  info: { color: '#17a2b8' },
  light: { color: '#f8f9fa' },
  dark: { color: '#343a40' },
});
