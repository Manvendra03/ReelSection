import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BouncingImage = ({ LikedImage ,setIsLiked}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Start the bounce animation on component mount
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 1.14, // Scale up
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 1, // Bounce back to original size with spring effect
        friction: 3, // Controls the bounce effect
        useNativeDriver: true,
      }),
    ]).start();
  }, []); // Empty dependency array triggers the animation on mount only

  return (
    <TouchableOpacity  onPress={()=>{
        
        LikedImage ? setIsLiked(false) : setIsLiked(true);
        console.log("press", LikedImage );

    }} style={styles.container} >
      <Animated.Image
        source={ LikedImage ?   require('../../assets/like_filled_icon.png') : require('../../assets/like_icon.png') }
        style={[{width: 28,
            height: 28, 
        tintColor: LikedImage ? "red" :"white"}, { transform: [{ scale: bounceValue }] }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
            marginBottom: 8,
            height: 25,
            width: 25,
            tintColor: true ? '#D03133' : "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default BouncingImage;
