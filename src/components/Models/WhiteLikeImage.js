
// import React, { useRef, useEffect } from 'react';
// import { View, Animated, StyleSheet, Image } from 'react-native';

// const WhiteLikeImage = ({ onAnimationComplete }) => {
//   const bounceValue = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Start the bounce animation and call onAnimationComplete after it ends
//     Animated.sequence([
//       Animated.timing(bounceValue, {
//         toValue: 1.14, // Scale up
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.spring(bounceValue, {
//         toValue: 1, // Bounce back to original size with spring effect
//         friction: 2,
//         tension: 120,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       // Hide the component after the animation completes
//       onAnimationComplete();
//       console.log("------Heres animation gots completed !!")
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={require('../../assets/like_filled_icon.png')}
//         style={[styles.image, { transform: [{ scale: bounceValue }] }]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 90,
//     height: 90,
//     tintColor: "white",
//   },
// });

// export default WhiteLikeImage;
import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Image } from 'react-native';

const WhiteLikeImage = ({ onAnimationComplete }) => {
  const bounceValue = useRef(new Animated.Value(0)).current; // For scale animation
  const translateY = useRef(new Animated.Value(0)).current; // Starts further off-screen

  useEffect(() => {
    // Start the combined animation
    Animated.parallel([
      // Translate animation to move the image up from off-screen
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800, // Slow entrance
        // easing: Animated.Easing.out(Animated.Easing.quad),
        useNativeDriver: true,
      }),
      // Two-time bounce effect using sequence
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1.2, // Scale up
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1, // Scale down
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1.1, // Scale up a second time
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1, // Return to original size
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      onAnimationComplete(); // Callback to hide the component after animation
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/like_filled_icon.png')}
        style={[
          styles.image,
          { 
            transform: [
              { scale: bounceValue },    // Scale animation
              { translateY: translateY }, // Slide in slowly from off-screen
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    tintColor: "white",
  },
});

export default WhiteLikeImage;
