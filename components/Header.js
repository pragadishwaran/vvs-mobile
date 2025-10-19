
import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './styles';

export default function Header({title}) {
  return (
    <View style={commonStyles.header}>
      <Text style={commonStyles.headerTitle}>{title}</Text>
    </View>
  );
}
