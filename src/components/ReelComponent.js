import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RightSideIcons from './ReelComponents/RightSideIcons';
import BottomContent from './ReelComponents/BottomContent';
import ProgressBar from './ReelComponents/ProgressBar';
import Video from 'react-native-video';
import {MyContext} from '../../App';
import WhiteLikeImage from './Models/WhiteLikeImage';
import UnMuteImage, {MuteImage} from './Models/MuteUnmuteModel';

const {height} = Dimensions.get('window');

const ReelComponent = ({index, item, Videoref}) => {
  const {focusedIndex, setFocusedVideoRef , ismute , setIsMute} = useContext(MyContext);
  const [isLiked, setIsLiked] = useState(false);
 
  const [isTapped, setIsTapped] = useState(false);
  const [showMuteModel, setShowMuteModel] = useState(false);
  const [showWhiteHeart, setShowWhiteHeart] = useState(false);
  const timeRef = useRef(null);

  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;

  useEffect(() => {
    console.log('ReelComponent get Renderss ... ');
    isLiked ? showingWhiteHeart() : () => {};
  }, [isLiked]);

  useEffect(() => {
    // setShowWhiteHeart(false);
    console.log('Tapped !!');
    // showMuteUnmute();

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    setShowMuteModel(true);
    setIsMute(!ismute);

    timeRef.current = setTimeout(() => {
      setShowMuteModel(false);
    }, 1400);
  }, [isTapped]);

  function showingWhiteHeart() {
    if (!isLiked) {
      setShowWhiteHeart(false);
    } else {
      setShowWhiteHeart(true);
    }
  }

  // function showMuteUnmute() {
  //   if (ismute) {
  //     console.log('Model Show TRUE');
  //     setShowMuteModel(true);
  //     setTimeout(() => {
  //       setShowMuteModel(false);
  //     }, 1000);
  //   } else {
  //     console.log('NOT  Model Show');
  //     // setIsMute(true);
  //   }
  // }

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
      <TouchableWithoutFeedback
        onPress={() => {
          // setIsMute(true);
          // setIsMute((prevMuteState) => !prevMuteState);
          // setShowWhiteHeart(true);
          setIsTapped(val => !val);
        }}>
        <Video
          ref={Videoref}
          source={item.video_url}
          repeat
          // paused
          muted = {!ismute}
          paused={focusedIndex != index}
          // controls={true}
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: "green",

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.muteImageContainer}>
            {showMuteModel ? (
              ismute ? (
                <UnMuteImage />
              ) : (
                <MuteImage />
              )
            ) : (
              <View />
            )}
          </View>

          {showWhiteHeart ? (
            <View
              style={[
                styles.overlay,
                {display: showWhiteHeart ? 'flex' : 'none'},
              ]}>
              {showWhiteHeart ? (
                <WhiteLikeImage
                  onAnimationComplete={() => {
                    setShowWhiteHeart(false);
                  }}
                />
              ) : (
                <View />
              )}
            </View>
          ) : (
            <View />
          )}
        </Video>
      </TouchableWithoutFeedback>

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
        <RightSideIcons isLiked={isLiked} setIsLiked={setIsLiked} />

        {/* // desc content */}
        <BottomContent />
        {/* //progress bar */}
        <ProgressBar />
      </View>
    </View>
  );
};

export default ReelComponent;

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11,
  },
  muteImageContainer: {
    position: 'absolute',
    flex: 1,
    // backgroundColor: "red",
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensures it stays above the video
  },
});
