import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MapPreview({ title = 'Location', link, subtitle = 'Open in Maps' }) {
  if (!link) return null;

  return (
    <TouchableOpacity style={styles.mapPreview} onPress={() => Linking.openURL(link)} activeOpacity={0.8}>
      <View style={styles.mapLeft}>
        <Ionicons name="location-outline" size={28} color="#fff" />
      </View>
      <View style={styles.mapRight}>
        <Text style={styles.mapTitle}>{title}</Text>
        <Text style={styles.mapSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    marginTop: 12,
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: '#FEB003',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  mapLeft: { width: 84, height: 84, backgroundColor: '#FEB003', alignItems: 'center', justifyContent: 'center' },
  mapRight: { padding: 12, justifyContent: 'center', backgroundColor: '#fff' },
  mapTitle: { fontSize: 16, fontWeight: '700', color: '#333' },
  mapSubtitle: { marginTop: 4, color: '#666' },
});
