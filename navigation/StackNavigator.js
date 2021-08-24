import React from 'react';
import {Button,Image} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import TabsNavigator from './TabsNavigator';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Purchase from '../screens/Purchase';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }} >
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <Image resizeMode="contain" source={require("../Images/menu.png")} style={{width:25,height:25,marginLeft:15}}/>
          ),
        }}
      />
     
    </Stack.Navigator>
  );
};

export default StackNavigator;
