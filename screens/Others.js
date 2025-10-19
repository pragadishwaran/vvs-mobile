import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ITEMS = [
  { key: 'GoSamrakshana', label: 'Go samrakshana', icon: 'cow', pack: 'mci' },
  {key: 'Publications', label: 'Publications', icon: 'book-outline' },
  {key: 'Gallery', label: 'Gallery', icon: 'images-outline' },
  { key: 'Enrollments', label: 'Enrollments', icon: 'create' },
  { key: 'AboutUs', label: 'About us', icon: 'information-circle' },
  { key: 'PandharpurMutt', label: 'Pandharpur Mutt', icon: 'office-building-outline', pack: 'mci' },
  { key: 'Contact', label: 'Contact', icon: 'call-outline' }
];

// { key: 'GoSamrakshana', label: 'Go samrakshana', icon: 'cow', pack: 'mci' },
// { key: 'MargaDharshan', label: 'Marga dharshan', icon: 'book-outline' },
// { key: 'Gurukulam', label: 'Gurukulam', icon: 'school' },

export default function Others({ navigation }){
  // fixed 3-column layout (user request)
  const [containerWidth, setContainerWidth] = useState(null);
  const COLUMNS = 3;
  const GAP = 12; // space between tiles

  const onLayout = useCallback((e) => setContainerWidth(e.nativeEvent.layout.width), []);

  const tileWidth = containerWidth
    ? Math.floor((containerWidth - GAP * (COLUMNS - 1)) / COLUMNS)
    : '31%';

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>More</Text>
        <View style={styles.grid} onLayout={onLayout}>
          {ITEMS.map((item, idx) => {
            const isLastInRow = (idx + 1) % COLUMNS === 0;
            return (
              <TouchableOpacity
                key={item.key}
                style={[styles.cell, { width: tileWidth, marginRight: isLastInRow ? 0 : GAP }]}
                onPress={() => navigation.navigate(item.key)}
                activeOpacity={0.7}
              >
                <View style={styles.iconWrap}>
                  {item.pack === 'mci' ? (
                    <MaterialCommunityIcons name={item.icon} size={36} color="#333" />
                  ) : (
                    <Ionicons name={item.icon} size={36} color="#333" />
                  )}
                </View>
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  heading: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cell: {
    width: '31%',
    aspectRatio: 1,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 8,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: { fontSize: 12, textAlign: 'center' },
});
