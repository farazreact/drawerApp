import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from '../screens/Feed';
import Article from '../screens/Article';
import Settings from '../screens/Settings';
import HomeNavigation from './HomeNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Settings" component={Settings} />

      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="HomeNavigation" component={HomeNavigation} />
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
