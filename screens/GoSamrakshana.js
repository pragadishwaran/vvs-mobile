import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import gosamrakshana from '../data/gosamrakshana.json';
import DonateButton from '../components/DonateButton';
import ImageGallery from '../components/ImageGallery';

// Import gallery images from assets/gosala
const images = [
  require('../assets/gosala/gho1.jpg'),
  require('../assets/gosala/gho2.jpg'),
  require('../assets/gosala/gho3.jpg'),
  require('../assets/gosala/gho4.jpg'),
  require('../assets/gosala/gho5.jpg'),
  require('../assets/gosala/gho6.jpg'),
  require('../assets/gosala/gho7.jpg'),
  require('../assets/gosala/gho8.jpg'),
  require('../assets/gosala/gho9.jpg'),
  require('../assets/gosala/gho10.jpg'),
  require('../assets/gosala/gho11.jpg'),
  require('../assets/gosala/gho12.jpg'),
  require('../assets/gosala/gho13.jpg'),
  require('../assets/gosala/gho14.jpg'),
  require('../assets/gosala/gho15.jpg')
];


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

  {/* Image gallery for Go Samrakshana */}
  <Text style={styles.sectionIntro}>Gallery</Text>
  <ImageGallery images={images} />

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
