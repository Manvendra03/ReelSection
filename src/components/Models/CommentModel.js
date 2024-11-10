import { StyleSheet, Text, View , FlatList ,Image,} from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../../App';
import RBSheet from 'react-native-raw-bottom-sheet';

const CommentModel = () => {

    const {commentModelRef} = useContext(MyContext);

  return (
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
                        source={require('../../assets/profile.jpeg')}
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
                        t very much el i liked it very muis is v it very much !!
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
                        source={require('../../assets/like_icon.png')}
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
                  source={require('../../assets/profile.jpeg')}
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
                source={require('../../assets/sticker_icon.png')}
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

  )
}

export default CommentModel

const styles = StyleSheet.create({
    emoji: {
        fontSize: 21, // Adjust emoji size
        marginHorizontal: 10, // Add spacing between emojis
      },
})