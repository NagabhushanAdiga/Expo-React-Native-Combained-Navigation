import React, { Component } from 'react'
import { View ,StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {Avatar,Text,Drawer,Paragraph,Title,TouchableRipple,Caption} from "react-native-paper"

import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer"
import { size } from 'lodash'

export function DrawerContent(props){
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                   <View style={styles.userInfo}>
                <View style={{flexDirection:"row",marginTop:15}}>
                    <Avatar.Image
                    size={120}
                    source={{uri:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}}
                    />
                </View>
                <View>
                    <Title style={styles.title}>Nagabhushan Adiga</Title>
                    <Caption style={styles.caption}>adiga</Caption>
                </View>
                   </View>
                   <Drawer.Section style={styles.dradwerSection}>
                   <DrawerItem
                icon={({color,size})=>(
                    <Icon name="home"
                    size={size}
                    color={color} 
                    />
                )}
                label="Home"
                />
                 <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
                 <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
                 <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
                 <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
                 <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
                   </Drawer.Section>
                </View>
                <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    size={size}
                    color={color} 
                    />
                )}
                label="Logout"
                />
            </Drawer.Section>
            </DrawerContentScrollView>
           
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfo:{
        paddingLeft:20,

    },
    title:{
        fontSize:20,
        marginTop:3,
        fontWeight:"bold"
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center"
    },
    section:{
        flexDirection:'row',
        alignItems:"center",
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    dradwerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#fff",
        borderTopWidth:1
    },
    preference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12,
        paddingHorizontal:16
    }
})
