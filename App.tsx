
import { Button, LogBox, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  
  return (
   <>
    <StatusBar
    barStyle={'light-content'}
    backgroundColor="transparent"
    translucent={true}
    />
    <Home/>
    </>
  );
}

