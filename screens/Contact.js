
import React from 'react';
import { SafeAreaView, ScrollView, Text, Linking, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapPreview from '../components/MapPreview';

const MAP_LINK = 'https://maps.app.goo.gl/QS9jKtLFryD4SuC79';

export default function Contact() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Get in touch</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="mail-outline" size={20} color="#333" />
            <Text style={styles.cardText}>vvsamsthan@yahoo.co.in</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={20} color="#333" />
            <Text style={styles.cardText}>04633-240255</Text>
          </View>

          <TouchableOpacity style={styles.website} onPress={() => Linking.openURL('https://vishwavarakarisamsthan.com')}>
            <Ionicons name="globe-outline" size={18} color="#007AFF" />
            <Text style={styles.websiteText}>Visit our website</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeading}>Location</Text>
        <MapPreview title="Vittal Vihar" link={MAP_LINK} subtitle="Open in Maps" />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: '800', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 3 }, shadowRadius: 6, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cardText: { marginLeft: 10, fontSize: 14, color: '#333' },
  website: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  websiteText: { marginLeft: 8, color: '#007AFF', fontWeight: '600' },
  sectionHeading: { marginTop: 18, fontSize: 16, fontWeight: '700' },
  mapPreview: { 
    marginTop: 12, 
    flexDirection: 'row', 
    borderRadius: 12, 
    overflow: 'hidden', 
    borderColor: '#FEB003', 
    borderWidth: 1, 
    backgroundColor: '#fff', 
  },
  mapLeft: { width: 84, height: 84, backgroundColor: '#FEB003', alignItems: 'center', justifyContent: 'center' },
  mapRight: { padding: 12, justifyContent: 'center', backgroundColor: '#fff' },
  mapTitle: { fontSize: 16, fontWeight: '700', color: '#333' },
  mapSubtitle: { marginTop: 4, color: '#666' },
});
