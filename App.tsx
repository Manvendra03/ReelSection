/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
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
import RBSheet from 'react-native-raw-bottom-sheet'; // Import RBSheet to use as the type
import { ReelData } from './src/ReelData';

export const MyContext = React.createContext({});


function App(): React.JSX.Element {
  
  const shareModelRef = useRef();
  const commentModelRef = useRef();
  const [focusedIndex , setFocusedIndex]  = useState(0);
  const [focusedVideoRef,setFocusedVideoRef] = useState(null);  
  const [ismute, setIsMute] = useState(false);

  const videoRefs = useRef(ReelData.map(() => React.createRef()));
   
  return (
    <MyContext.Provider value={{shareModelRef , ismute , setIsMute , commentModelRef , focusedIndex ,setFocusedIndex,focusedVideoRef,setFocusedVideoRef,videoRefs}}>
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
