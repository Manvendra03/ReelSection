import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RightSideIcons = () => {
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
      <Image
        source={require('../../assets/like_icon.png')}
        style={{marginTop: 15, marginBottom: 8}}
      />
      <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
        40.5k
      </Text>
      <Image
        source={require('../../assets/comment_icon.png')}
        style={{marginTop: 20, marginBottom: 10}}
      />
      <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
        40.5k
      </Text>
      <Image
        source={require('../../assets/share_icon.png')}
        style={{marginTop: 20, marginBottom: 10}}
      />
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
