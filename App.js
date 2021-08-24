import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './navigation/TabsNavigator';
// import DrawerNavigator from './navigation/DrawerNavigator';
// import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <DrawerNavigator /> */}
      <TabsNavigator/>
    </NavigationContainer>
  );
}
