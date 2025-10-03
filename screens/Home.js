
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import YouTubePlayer from '../components/YouTubePlayer';
import config from '../config/appConfig';

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom + 90 }] }>
        {/* YouTubePlayer (opens YouTube on mobile, iframe on web) */}
        <YouTubePlayer url={config.youtubeUrl} style={styles.videoPlaceholder} />

        {/* Announcements section */}
        <Text style={styles.announcementHeading}>Announcements</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Enrollments')} activeOpacity={0.7}>
          <Text style={styles.announcementLink}>Register for Rukmini kalyanam</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom tab-like navigation with icons; use inset to position and size bar */}
      <View
        style={[
          styles.tabBar,
          {
            bottom: (insets.bottom ? insets.bottom : 0) + 12,
            height: 56 + (insets.bottom ? insets.bottom : 0),
          },
        ]}
      >
         <TabItem
          iconName="people-outline"
          label="Satsang"
          onPress={() => navigation.navigate('Satsang')}
        />
        <TabItem
          iconName="school-outline"
          label="Gurukulam"
          onPress={() => navigation.navigate('Gurukulam')}
        />
        <TabItem
          iconName="book-outline"
          label="Margadharshan"
          onPress={() => navigation.navigate('MargaDharshan')}
        />
        {/* <TabItem
          iconName="book-outline"
          label="Publications"
          onPress={() => navigation.navigate('Publications')}
        />
        <TabItem
          iconName="images-outline"
          label="Gallery"
          onPress={() => navigation.navigate('Gallery')}
        /> */}
       
        <TabItem
          iconName="apps-outline"
          label="Others"
          onPress={() => navigation.navigate('Others')}
        />
      </View>
    </View>
  );
}

function TabItem({ iconName, label, onPress }) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={iconName} size={22} color="#333" />
      <Text style={styles.tabLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  videoPlaceholder: {
    height: 220,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
  },
  missionText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  announcementHeading: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
  },
  announcementLink: {
    marginTop: 8,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  tabBar: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // subtle top border to separate from content
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // stronger shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    // elevation for Android
    elevation: 8,
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
});
