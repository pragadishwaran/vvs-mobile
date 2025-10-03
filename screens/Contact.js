
import React from 'react';
import { SafeAreaView, ScrollView, Text, Linking, Button, StyleSheet } from 'react-native';

export default function Contact() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Get in touch</Text>
        <Text style={styles.body}>Email: vvsamsthan@yahoo.co.in</Text>
        <Text>Phone: 04633-240255</Text>
        <Button title="Open Website" onPress={()=>Linking.openURL('https://vishwavarakarisamsthan.com')} />
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
