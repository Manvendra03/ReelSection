import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {MyContext} from '../../../App.tsx';
import BouncingImage from './BouncingImage.js';
import WhiteLikeImage from '../Models/WhiteLikeImage.js';

const RightSideIcons = ({isLiked,setIsLiked}) => {
  const {shareModelRef, commentModelRef, focusedIndex, focusedVideoRef} =
    useContext(MyContext);
  

  return (
    <View
      style={{
        width: 50,
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        right: 12,
        alignItems: 'center',
      }}>
     
    {
      isLiked ? 
        <BouncingImage key={1} LikedImage = {true} setIsLiked={setIsLiked}/>
      : <BouncingImage key={2} LikedImage = {false} setIsLiked={setIsLiked}/>}
       

      <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
        40.5k
      </Text>

      <TouchableWithoutFeedback
        onPress={() => {
          commentModelRef.current.open();
        }}>
        <Image
          source={require('../../assets/comment_icon.png')}
          style={{marginTop: 20, marginBottom: 10}}
        />
      </TouchableWithoutFeedback>
      <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
        40.5k
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          shareModelRef.current.open();
        }}>
        <Image
          source={require('../../assets/share_icon.png')}
          style={{marginTop: 20, marginBottom: 10}}
        />
      </TouchableWithoutFeedback>
      <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
        40.5k
      </Text>

      <Image
        source={require('../../assets/three_dot_icon.png')}
        style={{
          marginTop: 30,
          marginBottom: 8,
          transform: [{rotate: '90deg'}],
        }}
      />
      <View
        style={{
          height: 35,
          width: 35,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: 'white',
          marginBottom: 20,
          marginTop: 20,
        }}>
        <Image
          source={require('../../assets/music_icon.png')}
          style={{
            position: 'absolute',
            zIndex: 2,
            alignSelf: 'center',
            top: 9,
          }}
        />
        <Image
          source={require('../../assets/music.jpeg')}
          style={{height: '100%', width: '100%', borderRadius: 5}}
        />
      </View>
    </View>
  );
};

export default RightSideIcons;

const styles = StyleSheet.create({});
