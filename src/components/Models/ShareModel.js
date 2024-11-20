import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../../../App';
import RBSheet from 'react-native-raw-bottom-sheet';

const ShareModel = () => {
  const {shareModelRef} = useContext(MyContext);

  const shareTileData = [
    {
      icon: require('../../assets/shareModel/link_icon.png'),
      name: 'CopyLink',
    },
    {
      icon: require('../../assets/shareModel/share.png'),
      name: 'Share',
    },
    {
      icon: require('../../assets/shareModel/whatsapp.png'),
      name: 'Whatsapp',
    },
  
    {
      icon: require('../../assets/shareModel/download.png'),
      name: 'Download',
    },
    {
      icon: require('../../assets/shareModel/facebook.png'),
      name: 'Facebook',
    },
    {
      icon: require('../../assets/shareModel/snapchat.png'),
      name: 'Snapchat',
    },
    {
      icon: require('../../assets/shareModel/text.png'),
      name: 'Sms',
    },
   
  ];

  return (
    <RBSheet
      ref={shareModelRef}
      height={560}
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
              source={require('../../assets/search.png')}
              style={{tintColor: '#9FA3AC', height: 16, width: 16}}
            />
            <Text style={{marginLeft: 8, color: '#9FA3AC'}}>Search</Text>
          </View>
          <Image
            source={require('../../assets/add_group.png')}
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
          }}
        />
        <FlatList
          horizontal
          data={shareTileData}
          renderItem={({item}) => {
            return (
              <View style={{marginLeft: 15}}>
                <ShareTile icon={item.icon} tittle={item.name} />
              </View>
            );
          }}
        />
      </View>
    </RBSheet>
  );
};

export default ShareModel;

const styles = StyleSheet.create({});

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
          source={require('../../assets/profile.jpeg')}
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

const ShareTile = ({icon, tittle}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 15,
      }}>
      <View
        style={{
          height: 50,
          borderRadius: 40,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2B3037',
        }}>
        <Image
          source={icon}
          style={{
            height: 20,
            tintColor: 'white',
            width: 20,
          }}
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 10,
          fontWeight: '500',
          marginTop: 9,
        }}>
        {tittle}
      </Text>
    </View>
  );
};
