import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppBar = () => {
  return (
    <View
    style={styles.appbarStyle}>
    <Image source={require('../assets/back_icon.png')} />
    <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>
      Reels
    </Text>
    <Image source={require('../assets/camera_icon.png')} />
  </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    appbarStyle : {
        height: 40,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop:10,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: "absolute",
        top: 0,
        zIndex:20,
        flexDirection: 'row',
      }
})