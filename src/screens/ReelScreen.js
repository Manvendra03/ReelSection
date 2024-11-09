import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import React, {useRef, useState} from 'react';
import BottomNavigationBar from '../components/BottomNavigationBar';
import AppBar from '../components/AppBar';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import ReelComponent from '../components/ReelComponent';

const {height} = Dimensions.get('window');

const ReelScreen = () => {
  const commentModelRef = useRef();
  const shareModelRef = useRef();

  const insets = useSafeAreaInsets();
  const reelHeight = height - 48 - insets.top - insets.bottom;

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          position: 'absolute',
          height: 28,
          width: '100%',
          top: insets.top,
        }}>
        <AppBar />
      </View>

      {/* <View
        style={{
          height: 380,
          width: '100%',
          backgroundColor: 'transparent',
          position: 'absolute',
          justifyContent: 'flex-end',

          bottom: 48,
        }}>
        <View
          style={{
            width: 50,
            backgroundColor: 'transparent',
            position: 'absolute',
            // bottom: 48,
            right: 15,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/like_icon.png')}
            style={{marginTop: 15, marginBottom: 8}}
          />
          <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
            40.5k
          </Text>
          <Image
            source={require('../assets/comment_icon.png')}
            style={{marginTop: 20, marginBottom: 10}}
          />
          <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
            40.5k
          </Text>

          <Image
            source={require('../assets/share_icon.png')}
            style={{marginTop: 20, marginBottom: 10}}
          />
          <Text numberOfLines={1} style={{fontSize: 11, color: 'white'}}>
            40.5k
          </Text>

          <Image
            source={require('../assets/three_dot_icon.png')}
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
              borderColor: 'white',
              marginBottom: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assets/music_icon.png')}
              style={{
                position: 'absolute',
                zIndex: 2,
                alignSelf: 'center',
                top: 9,
              }}
            />
            <Image
              source={require('../assets/music.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
      </View> */}

      <FlatList
        style={{backgroundColor: 'transaparent', flex: 1}}
        pagingEnabled
        contentContainerStyle={{flexGrow: 1}}
        decelerationRate="fast"
        snapToInterval={reelHeight} // Snaps to the screen height for each item
        snapToAlignment="start"
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item}) => <ReelComponent item={item} />}
        // renderItem={({item}) => (
        //   <TouchableOpacity
        //     onPress={() => {
        //       commentModelRef.current.open();
        //       // shareModelRef.current.open();
        //     }}
        //     style={{height: '100%', width: '100%', backgroundColor: 'green'}}
        //   />
        // )}
        keyExtractor={item => item.toString()}
      />

      <BottomNavigationBar />

      <RBSheet
        ref={commentModelRef}
        height={570}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#26282D',
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}>
        <View
          style={{
            // height: 570,
            flex: 1,
            // borderTopLeftRadius: 30,
            // borderTopRightRadius: 30, // add this if you want rounded corners on both sides
            // width: '100%',
            // backgroundColor: '#262626',
            // position: 'absolute',
            // bottom: 0,
          }}>
          {/* Comment and above line  */}
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <View
              style={{
                height: 1.5,
                width: 30,
                backgroundColor: 'white',
                borderRadius: 10,
              }}></View>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                marginTop: 12,
                color: 'white',
              }}>
              Comments
            </Text>
          </View>
          {/*  ---- Line ----  */}
          <View
            style={{
              height: 0.35,
              marginTop: 13,
              backgroundColor: 'grey',
              borderRadius: 10,
            }}></View>

          {/* Flat List */}
          <View style={{flex: 1}}>
            <FlatList
              data={[1, 3, 3, 4, 2, 3, 3, 2, 2, 12, 3, 4]}
              renderItem={() => (
                <View
                  style={{
                    // height: 90,
                    marginVertical: 10,
                    width: '100%',
                    // backgroundColor: 'green',
                  }}>
                  <View
                    style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 30,
                        marginTop: 4,
                        backgroundColor: 'red',
                      }}>
                      <Image
                        source={require('../assets/profile.jpeg')}
                        style={{height: 40, width: 40, borderRadius: 30}}
                      />
                    </View>
                    <View style={{width: '77%', marginHorizontal: 10}}>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 12,
                          color: 'white',
                        }}>
                        Manvendra.apk
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '500',
                          color: 'white',
                          marginTop: 5,
                        }}>
                        This is very funny reThis is very funny reel i liked it
                        t very much el i liked
                        it very muis is v it very much !!
                      </Text>
                      <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: 11,
                            color: '#A5A9B3',
                            marginRight: 20,
                          }}>
                          Reply
                        </Text>
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: 11,
                            color: '#A5A9B3',
                          }}>
                          See transparent
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 11,
                          color: '#A5A9B3',
                          marginTop: 12,
                          marginLeft: 36,
                        }}>
                        View 3 more replies
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 12,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/like_icon.png')}
                        style={{height: 13, width: 15, tintColor: '#A5A9B3'}}
                      />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '500',
                          color: '#A5A9B3',
                          marginTop: 2,
                        }}>
                        2440
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              style={{paddingHorizontal: 15}}></FlatList>
          </View>

          <View
            style={{
              height: 100,
              paddingTop: 10,
              width: '100%',
              marginHorizontal: 15,
              backgroundColor: 'transparent',
            }}>
            <View style={{height: '30%', flexDirection: 'row'}}>
              {/* <Text style={styles.emoji}>😊</Text> */}
              <Text style={styles.emoji}>😂</Text>
              <Text style={styles.emoji}>😍</Text>
              <Text style={styles.emoji}>🥺</Text>
              <Text style={styles.emoji}>👍</Text>
              <Text style={styles.emoji}>🎉</Text>
              <Text style={styles.emoji}>🤔</Text>
              <Text style={styles.emoji}>🔥</Text>
              {/* <Text style={styles.emoji}>🌟</Text> */}
              {/* <Text style={styles.emoji}>🥳</Text> */}
              <Text style={styles.emoji}>😎</Text>
            </View>
            <View
              style={{
                height: '70%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 20,
                paddingLeft: 5,
                backgroundColor: 'transparent',
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  marginTop: 4,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={require('../assets/profile.jpeg')}
                  style={{height: 30, width: 30, borderRadius: 30}}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  width: '70%',
                  color: 'grey',
                  fontSize: 13,
                }}>
                Add a comment...
              </Text>
              <Image
                source={require('../assets/sticker_icon.png')}
                style={{
                  height: 20,
                  marginHorizontal: 'auto',
                  width: 20,
                  color: 'white',
                  alignSelf: 'center',
                  tintColor: 'white',
                }}
              />
            </View>
          </View>
        </View>
      </RBSheet>

      <RBSheet
        ref={shareModelRef}
        height={570}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#26282D',
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}>
        <View
          style={{
            flex: 1,
          }}>
          {/*  above line  */}
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <View
              style={{
                height: 1.5,
                width: 30,
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            />
          </View>

          {/* Search Bar Slab  */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                height: 36,
                width: '80%',
                alignSelf: 'center',
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#2B3037',
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/search.png')}
                style={{tintColor: '#9FA3AC', height: 16, width: 16}}
              />
              <Text style={{marginLeft: 8, color: '#9FA3AC'}}>Search</Text>
            </View>
            <Image
              source={require('../assets/add_group.png')}
              style={{
                tintColor: 'white',
                alignSelf: 'center',
                height: 25,
                width: 25,
              }}
            />
          </View>

          {/*  */}
          <View style={{paddingHorizontal: 35, marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <ProfileTile />
              <ProfileTile />
              <ProfileTile />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <ProfileTile />
              <ProfileTile />
              <ProfileTile />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <ProfileTile />
              <ProfileTile />
              <ProfileTile />
            </View>
          </View>

          {/* Line */}
          <View
            style={{
              height: 1.5,
              width: '100%',
              marginTop: 0,
              backgroundColor: '#2B3037',
            }}/>
          <View style={{alignItems: 'center' , marginVertical: 15}}>
            <View
              style={{
                height: 50,
                borderRadius: 40,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#2B3037',
              }}>
              <Image
                source={require('../assets/link_icon.png')}
                style={{height: 23,tintColor: "white", borderRadius: 40, width: 23}}
              />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                fontWeight: '500',
                marginTop: 9,
              }}>
              Copy Link
            </Text>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({
  emoji: {
    fontSize: 21, // Adjust emoji size
    marginHorizontal: 10, // Add spacing between emojis
  },
});

const ProfileTile = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: 68,
          borderRadius: 40,
          width: 68,
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../assets/profile.jpeg')}
          style={{height: 68, borderRadius: 40, width: 68}}
        />
      </View>
      <Text
        style={{color: 'white', fontSize: 11, fontWeight: '500', marginTop: 9}}>
        Rishi Gupta
      </Text>
    </View>
  );
};
