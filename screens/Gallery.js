
import React from 'react';
import { SafeAreaView, ScrollView, Image, View, StyleSheet } from 'react-native';

export default function Gallery() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          {/* <Image source={require('../assets/gallery1.jpg')} style={styles.image} />
          <Image source={require('../assets/gallery2.jpg')} style={styles.image} />
          <Image source={require('../assets/gallery3.jpg')} style={styles.image} />
          <Image source={require('../assets/gallery4.jpg')} style={styles.image} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 12 },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  image: { width: '48%', height: 120, marginBottom: 8 },
});
