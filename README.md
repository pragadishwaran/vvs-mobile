
# Vishwa Varakari Samsthan - React Native (Expo) App (Scaffold)

This is a minimal React Native (Expo) scaffold generated to mirror the structure and content of https://vishwavarakarisamsthan.com.

## Included screens
- Home (mission, hero)
- About (organisation info)
- Publications (list of items)
- Gallery (image grid)
- Satsang (events / audio placeholder)
- Shop (products & cart)
- Contact (email & phone)

## How to run
1. Install dependencies:
   - `npm install` or `yarn`
2. Start expo:
   - `npm start`
3. Run on simulator or physical device using Expo Go.

> Note: The app uses placeholder images and sample data. Replace assets and content with real images/text from the website as needed.

Contact: vvsamsthan@yahoo.co.in | Phone: 04633-240255

## Fonts

To use a custom font (for example `Samarkan`) on native and web:

1. Add the font files (e.g. `Samarkan.ttf`) to `assets/fonts/`.
2. Install `expo-font` and `expo-app-loading` (or use `expo-splash-screen`) to load fonts before rendering.

Example (in `App.js`):

```js
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const [loaded, setLoaded] = useState(false);

if (!loaded) {
   return (
      <AppLoading
         startAsync={() => Font.loadAsync({ Samarkan: require('./assets/fonts/Samarkan.ttf') })}
         onFinish={() => setLoaded(true)}
         onError={console.warn}
      />
   );
}
```

On web you can also use `@font-face` in a CSS file and the header style will pick it up when the font is available.
