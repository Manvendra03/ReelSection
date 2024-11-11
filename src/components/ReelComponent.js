import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RightSideIcons from './ReelComponents/RightSideIcons';
import BottomContent from './ReelComponents/BottomContent';
import ProgressBar from './ReelComponents/ProgressBar';
import Video from 'react-native-video';
import {MyContext} from '../../App';
import DislikeImage from './ReelComponents/dislikeImage';

const {height} = Dimensions.get('window');

const ReelComponent = ({index, item ,Videoref}) => {
  const {focusedIndex,setFocusedVideoRef} = useContext(MyContext);


  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;

  useEffect(()=>{
    console.log("ReelComponent get Renderss ... ");
   
  },[])

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
      
      <Video
        ref={Videoref}
        source={item.video_url}
        repeat
        // paused
        paused={focusedIndex != index}
        controls={true}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
           </Video>

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
        <RightSideIcons />

        {/* // desc content */}
        <BottomContent />
        {/* //progress bar */}
        <ProgressBar />
      </View>
    </View>
  );
};

export default ReelComponent;

const styles = StyleSheet.create({});
