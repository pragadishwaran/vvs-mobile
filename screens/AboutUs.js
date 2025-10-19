import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import aboutus from '../data/aboutus.json';
import { Image } from 'react-native';
import anna from '../assets/anna.jpeg';

export default function AboutUs(){
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{aboutus.organization}</Text>

        <Text style={styles.subtitle}>{aboutus.overview}</Text>

        <Text style={styles.sectionHeading}>{aboutus.activities_intro}</Text>
        {aboutus.activities.map((a, i) => (
          <Text key={i} style={styles.listItem}>• {a}</Text>
        ))}

        <Text style={styles.sectionHeading}>{aboutus.philosophy_intro}</Text>
        <Text style={styles.paragraph}>{aboutus.philosophy}</Text>

        <Text style={styles.sectionHeading}>Founder</Text>
        <Text style={styles.bold}>{aboutus.founder.name}</Text>

        <View style={styles.banner}>
          <Image source={anna} style={styles.bannerImage} resizeMode="cover" />
        </View>

        <Text style={styles.paragraph}>{aboutus.founder.early_life}</Text>
        <Text style={styles.paragraph}>{aboutus.founder.spiritual_journey}</Text>
        <Text style={styles.paragraph}>{aboutus.founder.path_of_righteousness}</Text>

        <Text style={styles.sectionHeading}>Awards & Recognition</Text>
        <Text style={styles.paragraph}>{aboutus.awards}</Text>

        <Text style={styles.paragraph}>{aboutus.closing}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: '800' },
  subtitle: { marginTop: 10, fontSize: 14, lineHeight: 20 },
  sectionHeading: { marginTop: 14, fontSize: 16, fontWeight: '700' },
  listItem: { marginTop: 8, fontSize: 14 },
  paragraph: { marginTop: 8, fontSize: 14, lineHeight: 20 },
  bold: { marginTop: 8, fontSize: 15, fontWeight: '700' }
  ,
  banner: {
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    // subtle shadow (iOS) and elevation (Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  }
});
