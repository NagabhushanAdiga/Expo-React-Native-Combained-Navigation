import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import StackNavigator from './StackNavigator'
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Purchase from '../screens/Purchase';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) =>(
  <TouchableOpacity
  style={{height:70,width:70,top:-30,justifyContent:"center",alignItems:"center",backgroundColor:"red",borderRadius:35,...styles.shadow}}
  onPress={()=>{
    alert("Hi Hello")
  }}>
    <View style={{width:70,height:70}}>
    {children}
    </View>
  </TouchableOpacity>
)

const TabsNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel:false,
      style:{
        position:"absolute",
        // bottom:25,
        // left:20,
        // right:20,
        elevation:0,
        // borderRadius:10,
        height:70,
        backgroundColor:"#fff",
        ...styles.shadow
      }
    }}
    >
      <Tab.Screen name="Home" component={StackNavigator} 
      options={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems:"center",justifyContent:"center",top:10}}>
          <Icon name="home" size={30} color="red" />

            {/* <Image 
            source={require("../Med/assets/Icons/home.png")}
            resizeMode="contain"
            style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
            /> */}
            <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Home</Text>
          </View>
        ),
      }}
      />
      <Tab.Screen name="Settings" component={StackNavigator}
         options={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems:"center",justifyContent:"center",top:10}}>
          <Icon name="home" size={30} color="red" />

            {/* <Image 
            source={require("../Med/assets/Icons/home.png")}
            resizeMode="contain"
            style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
            /> */}
            <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Search</Text>
          </View>
        ),
      }}
       />
      <Tab.Screen name="Settings1" component={StackNavigator} 
  options={{
    tabBarIcon:({focused})=>(
      <Icon name="plus" size={25} color="#fff" style={{fontWeight:"bold"}} />
      // <Image 
      //       source={require("../Med/assets/Icons/home.png")}
      //       resizeMode="contain"
      //       style={{width:10,height:10,tintColor:'red'}}
      //       />
            ),
            tabBarButton : (props)=>(
              <CustomTabBarButton {...props}/>
            )
  }}
      />
      <Tab.Screen name="Settings2" component={StackNavigator}
         options={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems:"center",justifyContent:"center",top:10}}>
          <Icon name="home" size={30} color="red" />
            {/* <Image 
            source={require("../Med/assets/Icons/home.png")}
            resizeMode="contain"
            style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
            /> */}
            <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Wah</Text>
          </View>
        ),
      }}
       />
        <Tab.Screen name="Purchase" component={StackNavigator}
         options={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems:"center",justifyContent:"center",top:10}}>
          <Icon name="home" size={30} color="red" />
            {/* <Image 
            source={require("../Med/assets/Icons/home.png")}
            resizeMode="contain"
            style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
            /> */}
            <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Wah</Text>
          </View>
        ),
      }}
       />
    </Tab.Navigator>
    // <Tabs.Navigator tabBarOptions={{style:{
    //   backgroundColor:"#fff",
    //   height:60
    // }}}>
    //   <Tabs.Screen name="Home" component={StackNavigator} />
    //   <Tabs.Screen name="Messages" component={StackNavigator} />
    //   <Tabs.Screen name="Profile" component={StackNavigator} />
    // </Tabs.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
  }

})

export default TabsNavigator;
