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
import React, {useContext, useEffect, useRef, useState} from 'react';
import BottomNavigationBar from '../components/BottomNavigationBar';
import AppBar from '../components/AppBar';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import ReelComponent from '../components/ReelComponent';
import {ReelData} from '../ReelData';
import {MyContext} from '../../App.tsx';
import CommentModel from '../components/Models/CommentModel.js';
import ShareModel from '../components/Models/ShareModel.js';

const {height} = Dimensions.get('window');

const ReelScreen = () => {
  const {
    focusedIndex,
    focusedVideoRef,
    setFocusedIndex,
    videoRefs,
    setFocusedVideoRef,
  } = useContext(MyContext);

  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;
  const [nextIndex , setNextIndex] = useState(0);
   
  useEffect(()=>{
    if(focusedVideoRef)
      {
        focusedVideoRef.current.seek(0);
        // console.log("set's to Zero")
        setFocusedVideoRef(videoRefs.current[nextIndex]);
      }
      else{
        setFocusedVideoRef(videoRefs.current[0]);
        // console.log("null thing ")
      }
  },[nextIndex])


  const onViewableItemsChanged = useRef(({viewableItems}) => {
     

    if (viewableItems.length > 0) 
    { 
        setNextIndex(viewableItems[0].index);     
        setFocusedIndex(viewableItems[0].index);

        
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
        renderItem={({index, item}) => (
          <ReelComponent
            index={index}
            item={item}
            Videoref={videoRefs.current[index]}
          />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          // viewAreaCoveragePercentThreshold: 0
          itemVisiblePercentThreshold: 80,
        }}
      />

      <BottomNavigationBar />

      <CommentModel />

      <ShareModel />
    </SafeAreaView>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({});





