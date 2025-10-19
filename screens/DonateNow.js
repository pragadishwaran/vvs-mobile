import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DonateButton(){
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.ctaButton}
      onPress={() => navigation.navigate('DonateNow')}
      activeOpacity={0.85}
    >
      <Text style={styles.ctaLabel}>Donate now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ctaButton: {
    marginTop: 20,
    backgroundColor: '#FEB003',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  ctaLabel: { fontSize: 16, fontWeight: '700', color: '#000' },
});


