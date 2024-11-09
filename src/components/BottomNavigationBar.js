
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomNavigationBar = () => {
  return (
    <View style={styles.bottombarStyle}>
    <Image source={require('../assets/home_icon.png')} />
    <Image source={require('../assets/search_icon.png')} />
    <View
      style={{
        height: 22,
        width: 22,
        borderRadius: 5,
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../assets/add_post_icon.png')}
        style={{height: '100%', width: '100%'}}
      />
    </View>

    <Image
      source={require('../assets/reel_icon.png')}
      style={{height: 25, width: 25}}
    />
    <View
      style={{
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../assets/profile.jpeg')}
        style={{height: 25, width: 25, borderRadius: 25}}
      />
    </View>
  </View>
  )
}

export default BottomNavigationBar

const styles = StyleSheet.create({
    bottombarStyle: {
        paddingHorizontal: 30,
        height: 48,
        width: '100%',
        backgroundColor: 'transparent',
        // position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
})