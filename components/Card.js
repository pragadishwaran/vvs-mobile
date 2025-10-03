
import React from 'react';
import { View, Text } from 'react-native';

export default function Card({title, subtitle}) {
  return (
    <View style={{padding:12, margin:8, borderRadius:8, backgroundColor:'#fff', shadowColor:'#000'}}>
      <Text style={{fontSize:16, fontWeight:'600'}}>{title}</Text>
      {subtitle ? <Text style={{marginTop:6}}>{subtitle}</Text> : null}
    </View>
  );
}
