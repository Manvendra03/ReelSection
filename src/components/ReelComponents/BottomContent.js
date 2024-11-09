import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomContent = () => {
  return (
    <View
          style={{
            height: 300,
            flex: 1,
            maxWidth: '85%',
            // backgroundColor: 'green',
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: 20,
          }}>
          {/* Profile Slab */}
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 6,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 30,
                backgroundColor: 'red',
              }}>

                <Image source={require("../../assets/profile.jpeg")} style ={{height: 35,
                width: 35,
                borderRadius: 30,}}/>
              </View>
              
            <Text
              style={{
                fontSize: 14,
                fontWeight: '800',
                marginHorizontal: 8,
                color: 'white',
              }}>
              Manvendra.apk
            </Text>
            <Image source={require('../../assets/verified_icon.png')} style={{}} />
            <View
              style={{
                height: 24,
                width: 65,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 6,
                borderColor: '#ffffff99',
                borderWidth: 2,
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>
                Follow
              </Text>
            </View>
          </View>

          {/* Reel  Description  */}
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              color: 'white',
              maxWidth: '90%',
              marginHorizontal: 10,
              marginBottom: 10,
              overflow: 'hidden',
              flexShrink: 1, // Ensures text doesn’t overflow
            }}>
            Lorem metus porttitor purus enim. Lorem metus porttitor. Lorem metus
            porttitor purus enim. Lorem metus porttitor purus enim. Lorem metus
            porttitor purus enim.
          </Text>

          {/* Follers Pannel  */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent',
              alignItems: 'center',
              marginHorizontal: 10,
              marginBottom: 8,
            }}>
            <View style={{flexDirection: 'row', marginRight: 6}}>
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderRadius: 25,

                  zIndex: 3,
                  backgroundColor: 'blue',
                }}>
                {/* <Image
                source={require('../assets/profile.jpeg')}
                style={{height: 17, width: 17, borderRadius: 25}}
              /> */}
              </View>
              <View
                style={{
                  height: 15,
                  width: 15,
                  marginLeft: -8,
                  zIndex: 2,
                  borderRadius: 25,
                  backgroundColor: 'orange',
                }}>
                {/* <Image
                source={require('../assets/profile.jpeg')}
                style={{height: 17, width: 17, borderRadius: 25}}
              /> */}
              </View>
              <View
                style={{
                  height: 15,
                  width: 15,
                  marginLeft: -8,
                  borderRadius: 25,
                  backgroundColor: 'red',
                }}>
                {/* <Image
                source={require('../assets/profile.jpeg')}
                style={{height: 17, width: 17, borderRadius: 25}}
              /> */}
              </View>
            </View>
            <Text style={{fontSize: 11, fontWeight: '600', color: '#ffffff90'}}>
              Followed by Kuldeep_091 and 3 other{' '}
            </Text>
          </View>

          {/* ...... Music and tagged peoples Bar   */}
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <View
              style={{
                borderRadius: 26,
                flexDirection: 'row',
                paddingVertical: 4,
                paddingHorizontal: 10,
                maxWidth: '63%',
                marginRight: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* Background with opacity */}
              <View
                style={{
                  ...StyleSheet.absoluteFillObject, // Covers entire container
                  backgroundColor: 'white',
                  borderRadius: 26,
                  opacity: 0.16, // Adjust the opacity level here
                }}
              />

              <Image
                source={require('../../assets/music_icon.png')}
                style={{
                  height: 11,
                  width: 11,
                  marginRight: 7,
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: 'white',
                  overflow: 'hidden',
                  flexShrink: 1, // Ensures text doesn’t overflow
                }}>
                Lorem metus porttitor purus enim. Lorem metus porttitor. Lorem
                metus porttitor purus enim. Lorem metus porttitor purus enim.
                Lorem metus porttitor purus enim.
              </Text>
            </View>
            <View
              style={{
                height: 26,
                paddingVertical: 8,
                borderRadius: 26,
                maxWidth: '35%',

                flexDirection: 'row',
                paddingVertical: 4,
                paddingHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* Background with opacity */}
              <View
                style={{
                  ...StyleSheet.absoluteFillObject, // Covers entire container
                  backgroundColor: 'white',
                  borderRadius: 26,
                  opacity: 0.18, // Adjust the opacity level here
                }}
              />

              {/* Content on top of the background */}
              <Image
                source={require('../../assets/person_icon.png')}
                style={{
                  height: 10,
                  width: 10,
                  marginRight: 8,
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: 'white',
                  overflow: 'hidden',

                  flexShrink: 1, // Ensures text doesn’t overflow
                }}>
                55 users
              </Text>
            </View>
          </View>
        </View>
  )
}

export default BottomContent

const styles = StyleSheet.create({})