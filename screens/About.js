
import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About Vishwa Varakari Samsthan</Text>
        <Text style={styles.body}>
          Founded with a mission to preserve and promote the Varkari sampraday, and engage in Go Samrakshna (cow protection) and spiritual education.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700' },
  body: { marginTop: 8 },
});
