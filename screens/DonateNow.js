import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function DonateNow({navigation}){
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Donate Now</Text>
        <Text style={styles.body}>Donation page placeholder.</Text>
        <Button title="Donate" onPress={()=>alert('Donate flow placeholder')} />
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
