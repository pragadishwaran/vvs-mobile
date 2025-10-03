import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import margadharshan from '../data/margadharshan.json';

export default function MargaDharshan(){
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{margadharshan.title}</Text>
        </View>

        <Text style={styles.subtitle}>{margadharshan.subtitle}</Text>
        <Text style={styles.description}>{margadharshan.description}</Text>

        <Text style={styles.sectionHeading}>Contents</Text>
        {margadharshan.contents.map((item, idx) => (
          <Text key={idx} style={styles.listItem}>• {item}</Text>
        ))}

        <Text style={styles.notes}>{margadharshan.notes}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '800' },
  subtitle: { marginTop: 8, fontSize: 15, fontWeight: '600' },
  description: { marginTop: 10, fontSize: 14, lineHeight: 20 },
  sectionHeading: { marginTop: 14, fontSize: 16, fontWeight: '700' },
  listItem: { marginTop: 8, fontSize: 14 },
  notes: { marginTop: 16, fontSize: 14, fontStyle: 'italic' },
});
