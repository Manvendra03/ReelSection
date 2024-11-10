import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import React, {useContext, useRef, useState} from 'react';
import BottomNavigationBar from '../components/BottomNavigationBar';
import AppBar from '../components/AppBar';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import ReelComponent from '../components/ReelComponent';
import {ReelData} from '../ReelData';
import { MyContext } from '../../App.tsx';
import CommentModel from '../components/Models/CommentModel.js';
import ShareModel from '../components/Models/ShareModel.js';

const {height} = Dimensions.get('window');

const ReelScreen = () => {

  const {focusedIndex ,setFocusedIndex} = useContext(MyContext);
  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;

   // Create a ref array, one for each video item
   const videoRefs = useRef(ReelData.map(() => React.createRef()));


  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {

     
               setFocusedIndex(viewableItems[0].index);
               console.log("chaging focuss Index to ",viewableItems[0].index);
        
    
    }
  }).current;

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          position: 'absolute',
          height: 28,
          width: '100%',
          top: insets.top,
        }}>
        <AppBar />
      </View>


      <FlatList
        style={{backgroundColor: 'transaparent', flex: 1}}
        pagingEnabled
        keyExtractor={item => item.key}
        contentContainerStyle={{flexGrow: 1}}
        decelerationRate="fast"
        snapToInterval={reelHeight} // Snaps to the screen height for each item
        snapToAlignment="start"
        showsVerticalScrollIndicator={false}
        data={ReelData}
        renderItem={({index, item}) => <ReelComponent  index ={index} item={item} ref = {videoRefs[index]} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          // viewAreaCoveragePercentThreshold: 0    
          itemVisiblePercentThreshold: 80
        }}
     />

      <BottomNavigationBar />

      <CommentModel/>

      <ShareModel/>
    </SafeAreaView>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({
  
});
