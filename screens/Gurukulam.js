import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import gurukulam from '../data/gurukulam.json';
import DonateButton from '../components/DonateButton'; 

export default function Gurukulam(){
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{gurukulam.title}</Text>
        <Text style={styles.subtitle}>{gurukulam.subtitle}</Text>
        <Text style={styles.description}>{gurukulam.description}</Text>

        <Text style={styles.sectionIntro}>{gurukulam.curriculum_intro}</Text>
        {gurukulam.curriculum.map((c, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.sectionTitle}>{c.heading}</Text>
            {c.items.map((it, j) => (
              <Text key={j} style={styles.listItem}>• {it}</Text>
            ))}
          </View>
        ))}

        <Text style={styles.paragraph}>{gurukulam.experientialLearning}</Text>

        <Text style={styles.sectionIntro}>{gurukulam.holistic_development_intro}</Text>
        {gurukulam.holistic_development.map((h, idx) => (
          <Text key={idx} style={styles.listItem}>• {h}</Text>
        ))}

        <Text style={styles.paragraph}>{gurukulam.environment}</Text>

        <Text style={styles.eligibility}>{gurukulam.eligibility}</Text>
        <DonateButton />
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
  sectionIntro: { marginTop: 12, fontSize: 15, fontWeight: '700' },
  section: { marginTop: 8 },
  sectionTitle: { fontSize: 14, fontWeight: '700' },
  listItem: { fontSize: 14, marginTop: 6 },
  paragraph: { marginTop: 12, fontSize: 14, lineHeight: 20 },
  eligibility: { marginTop: 16, fontSize: 14, fontWeight: '600' },
});
