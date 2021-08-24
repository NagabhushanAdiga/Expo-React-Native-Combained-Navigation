import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
