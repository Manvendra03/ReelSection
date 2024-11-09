/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReelScreen from './src/screens/ReelScreen';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const MyContext = React.createContext({});

function App(): React.JSX.Element {
  

  return (
    <MyContext.Provider value={{}}>
    <SafeAreaProvider style = {{height: "100%" , width: "100%" , backgroundColor: "black"}}>
       <ReelScreen/>
    </SafeAreaProvider>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
