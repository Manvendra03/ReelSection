import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DislikeImage = ({setIsLiked}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;
  const [render,setRender] = useState(0);
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
        setIsLiked(true);
        // setRender(render+1);
    }} style={styles.container} >
      <Animated.Image
        source={require('../../assets/like_icon.png')}
        style={[styles.image, { transform: [{ scale: bounceValue }] }]}
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
  image: {
    width: 28,
    height: 28,
    tintColor: "white",
  },
});

export default DislikeImage;
