import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import gosamrakshana from '../data/gosamrakshana.json';
import DonateButton from '../components/DonateButton';


export default function GoSamrakshanaTrust() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Title & Organization */}
        <Text style={styles.title}>{gosamrakshana.title}</Text>

        {/* Establishment */}
        <Text style={styles.sectionIntro}>Establishment</Text>
        <Text style={styles.paragraph}>
          Established in {gosamrakshana.establishment.year} by {gosamrakshana.establishment.founder}.
        </Text>
        <Text style={styles.paragraph}>With blessings from:</Text>
        {gosamrakshana.establishment.blessingsFrom.map((b, i) => (
          <Text key={i} style={styles.listItem}>• {b}</Text>
        ))}
        <Text style={styles.paragraph}>Purpose: {gosamrakshana.establishment.purpose}</Text>

        {/* Dharma Message */}
        <Text style={styles.sectionIntro}>Dharma Message</Text>
        <Text style={styles.paragraph}>{gosamrakshana.dharmaMessage}</Text>

        {/* Mission */}
        <Text style={styles.sectionIntro}>Mission</Text>
        <Text style={styles.paragraph}>{gosamrakshana.mission}</Text>

        {/* Appeal */}
        <Text style={styles.sectionIntro}>Appeal</Text>
        <Text style={styles.paragraph}>{gosamrakshana.appeal}</Text>

        {/* Invitation */}
        <Text style={styles.sectionIntro}>Invitation</Text>
        <Text style={styles.paragraph}>{gosamrakshana.invitation}</Text>

        <DonateButton />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '800' },
  sectionIntro: { marginTop: 16, fontSize: 15, fontWeight: '700' },
  paragraph: { marginTop: 8, fontSize: 14, lineHeight: 20 },
  listItem: { fontSize: 14, marginTop: 6 }
});
