import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

export default function Enrollments(){
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Enrollments</Text>
        <Text style={styles.body}>Content for Enrollments.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: '700' },
  body: { marginTop: 8 },
});
