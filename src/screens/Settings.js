import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{backgroundColor: 'blue', flex: 1}}>Settings</Text>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Text
          style={{
            backgroundColor: 'red',
            color: 'black',
            alignSelf: 'flex-start',
            margin: 20,
            padding: 20,
          }}>
          Open{' '}
        </Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
