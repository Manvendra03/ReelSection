import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UnMuteImage = () => {
  return (
    <View
      style={{
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}>
      <Image
        source={require('../../assets/unmute.png')}
        style={{height: 17, width: 17, tintColor: 'white'}}></Image>
    </View>
  );
};

export default UnMuteImage;

const styles = StyleSheet.create({});

export const MuteImage = () => {
  return (
    <View
      style={{
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

      }}>
      <Image
        source={require('../../assets/mute.png')}
        style={{height: 17, width: 17, tintColor: 'white'}}></Image>
    </View>
  );
};
