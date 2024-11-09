import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RightSideIcons from './ReelComponents/RightSideIcons';
import BottomContent from './ReelComponents/BottomContent';
import ProgressBar from './ReelComponents/ProgressBar';

const {height} = Dimensions.get('window');

const ReelComponent = ({item}) => {
  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;

  return (
    <View
      style={{
        height: reelHeight, // Ensures each item takes up the full height of the FlatList container
        width: '100%',
        // borderColor: 'white',
        // borderWidth: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/69/f7/66/69f7666440ceb4efe41223601648de5d.jpg',
        }}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover" // Adjusts how the image scales within the view
      />
   
      {/* // main area content */}
      <View
        style={{
          height: 380,
          width: '100%',
          backgroundColor: 'transparent',
          position: 'absolute',
          //   justifyContent: 'flex-end',
          bottom: 0,
        }}>
        {/* //right side icon columns */}
        <RightSideIcons/>
      
        {/* // desc content */}
         <BottomContent/>
        {/* //progress bar */}
          <ProgressBar/>
      </View>
    </View>
  );
};

export default ReelComponent;

const styles = StyleSheet.create({});
