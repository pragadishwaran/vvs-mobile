
import React from 'react';
import { View, Text } from 'react-native';

export default function Header({title}) {
  return (
    <View style={{padding:16, backgroundColor:'#0f4c81'}}>
      <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>{title}</Text>
    </View>
  );
}
