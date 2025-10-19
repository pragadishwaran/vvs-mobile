import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from './styles';

export default function DonateButton(){
  const navigation = useNavigation();
  const openDonationLink = async () => {
    const url = 'https://pages.razorpay.com/gosamrakshanavvs';
    // Check if the device can open the URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Currently we are facing some issue`);
    }
  }
  return (
    <TouchableOpacity
      style={commonStyles.donateButton}
      onPress={openDonationLink}
      activeOpacity={0.85}
    >
      <Text style={commonStyles.donateButtonText}>Donate now</Text>
    </TouchableOpacity>
  );
}


