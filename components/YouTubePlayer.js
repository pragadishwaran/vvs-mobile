import React, { useCallback } from 'react';
import { View, Platform, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function YouTubePlayer({ url, style }){
  const videoIdMatch = url && url.match(/[?&]v=([\w-]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : url;
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  const open = useCallback(() => {
    if (!watchUrl) return;
    Linking.openURL(watchUrl).catch(() => {
      if (Platform.OS === 'web') window.open(watchUrl, '_blank');
    });
  }, [watchUrl]);

  return (
    <TouchableOpacity onPress={open} activeOpacity={0.8} style={[styles.container, style]}>
      {thumbnail ? (
        <Image source={{ uri: thumbnail }} style={styles.image} />
      ) : (
        <View style={styles.noImage}><Text>Open video</Text></View>
      )}
      <View style={styles.playOverlay} pointerEvents="none">
        <Ionicons name="play-circle" size={56} color="rgba(255,255,255,0.9)" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { height: 220, borderRadius:8, overflow:'hidden', backgroundColor:'#000', alignSelf:'stretch' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  noImage: { flex:1, alignItems:'center', justifyContent:'center' },
  playOverlay: { position:'absolute', left:0, right:0, top:0, bottom:0, alignItems:'center', justifyContent:'center' }
});
