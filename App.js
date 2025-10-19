import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaProviderCompat } from '@react-navigation/elements';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import PublicationsScreen from './screens/Publications';
import GalleryScreen from './screens/Gallery';
import SatsangScreen from './screens/Satsang';
import ShopScreen from './screens/Shop';
import ContactScreen from './screens/Contact';
import OthersScreen from './screens/Others';
import GoSamrakshanaScreen from './screens/GoSamrakshana';
import MargaDharshanScreen from './screens/MargaDharshan';
import GurukulamScreen from './screens/Gurukulam';
import EnrollmentsScreen from './screens/Enrollments';
import DonateNowScreen from './screens/DonateNow';
import AboutUsScreen from './screens/AboutUs';
import PandharpurMuttScreen from './screens/PandharpurMutt';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load the Samarkan font from assets/fonts (filename provided by user)
  const [fontsLoaded] = useFonts({ Samarkan: require('./assets/fonts/SamarkanNormal-Gg5D.ttf') });

  if (!fontsLoaded) {
    // show a tiny loading indicator while the font loads
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }
  return (
    <SafeAreaProvider>
      {/* SafeAreaProviderCompat ensures react-navigation elements get a compatible provider */}
      <SafeAreaProviderCompat>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
              screenOptions={{
                // Slimmer header height and style
                headerStyle: { backgroundColor: '#FEB003', height: 64 },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: '700',
                  color: '#000',
                  // small top padding to vertically center the title in the reduced header
                  paddingTop: 2,
                  // use the loaded Samarkan font
                  fontFamily: 'Samarkan',
                },
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
              }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Vishwa Varakari Samsthan' }}
            />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
            <Stack.Screen name="Publications" component={PublicationsScreen} options={{ title: 'Publications' }} />
            <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Gallery' }} />
            <Stack.Screen name="Satsang" component={SatsangScreen} options={{ title: 'Satsang' }} />
            <Stack.Screen name="Shop" component={ShopScreen} options={{ title: 'Shop' }} />
            <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
            <Stack.Screen name="Others" component={OthersScreen} options={{ title: 'Others' }} />
            <Stack.Screen name="GoSamrakshana" component={GoSamrakshanaScreen} options={{ title: 'Go samrakshana' }} />
            <Stack.Screen name="MargaDharshan" component={MargaDharshanScreen} options={{ title: 'Marga dharshan' }} />
            <Stack.Screen name="Gurukulam" component={GurukulamScreen} options={{ title: 'Gurukulam' }} />
            <Stack.Screen name="Enrollments" component={EnrollmentsScreen} options={{ title: 'Enrollments' }} />
            <Stack.Screen name="DonateNow" component={DonateNowScreen} options={{ title: 'Donate now' }} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: 'About us' }} />
            <Stack.Screen name="PandharpurMutt" component={PandharpurMuttScreen} options={{ title: 'Pandharpur Mutt' }} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProviderCompat>
    </SafeAreaProvider>
  );
}
