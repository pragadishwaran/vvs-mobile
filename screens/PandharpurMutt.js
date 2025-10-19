import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import muttData from '../data/pandarimutt.json';
import ImageGallery from '../components/ImageGallery';

export default function PandharpurMutt() {
  const images = [
    require('../assets/pandari/pandari1.jpg'),
    require('../assets/pandari/pandari2.jpg'),
    require('../assets/pandari/pandari3.jpg'),
    require('../assets/pandari/pandari4.jpg'),
    require('../assets/pandari/pandari5.jpg'),
    require('../assets/pandari/pandari6.jpg'),
    require('../assets/pandari/pandari7.jpg'),
    require('../assets/pandari/pandari8.jpg')
  ]
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Title & Organization */}
        <Text style={styles.title}>{muttData.title}</Text>
        <Text style={styles.subtitle}>{muttData.organization}</Text>

        {/* Location */}
        <Text style={styles.sectionIntro}>Location</Text>
        <Text style={styles.paragraph}>{muttData.location.description}</Text>
        <Text style={styles.paragraph}>{muttData.location.temple}</Text>

        {/* Establishment */}
        <Text style={styles.sectionIntro}>Establishment</Text>
        <Text style={styles.paragraph}>
          Established with blessings from:
        </Text>
        {muttData.establishment.blessingsFrom.map((b, i) => (
          <Text key={i} style={styles.listItem}>• {b}</Text>
        ))}
        <Text style={styles.paragraph}>
          Area: {muttData.establishment.muttAreaSqft} sq.ft
        </Text>
        <Text style={styles.paragraph}>
          Purpose: {muttData.establishment.purpose}
        </Text>
        <Text style={styles.paragraph}>
          Proximity: {muttData.establishment.proximity}
        </Text>

        {/* Activities */}
        <Text style={styles.sectionIntro}>Activities</Text>
        {muttData.activities.map((a, idx) => (
          <Text key={idx} style={styles.listItem}>• {a}</Text>
        ))}

        {/* Special Months */}
        <Text style={styles.sectionIntro}>Special Months</Text>
        {muttData.specialMonths.map((m, idx) => (
          <Text key={idx} style={styles.listItem}>• {m}</Text>
        ))}

        {/* Contact */}
        <Text style={styles.sectionIntro}>Contact</Text>
        {muttData.contact.phoneNumbers.map((ph, idx) => (
          <Text key={idx} style={styles.listItem}>{ph}</Text>
        ))}

        {/* Address */}
        <Text style={styles.sectionIntro}>Address</Text>
        <Text style={styles.paragraph}>{muttData.address.name}</Text>
        <Text style={styles.paragraph}>{muttData.address.landmark}</Text>
        <Text style={styles.paragraph}>{muttData.address.area}</Text>
        <Text style={styles.paragraph}>
          {muttData.address.city} – {muttData.address.pincode}
        </Text>

        {/* Welcome Message */}
        <Text style={styles.sectionIntro}>Welcome</Text>
        <Text style={styles.paragraph}>{muttData.welcomeMessage}</Text>
         {/* Gallery Message */}
        <Text style={styles.sectionIntro}>Gallery</Text>
        <ImageGallery images={images} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '800' },
  subtitle: { marginTop: 8, fontSize: 16, fontWeight: '600' },
  description: { marginTop: 12, fontSize: 14, lineHeight: 20 },
  sectionIntro: { marginTop: 16, fontSize: 15, fontWeight: '700' },
  listItem: { fontSize: 14, marginTop: 6 },
  paragraph: { marginTop: 8, fontSize: 14, lineHeight: 20 }
});
