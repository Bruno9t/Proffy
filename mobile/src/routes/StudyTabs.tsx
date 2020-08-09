import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Ionicons} from "@expo/vector-icons"

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const {Navigator,Screen} = createBottomTabNavigator()


const StudyTabs = ()=>{
    return (
        <Navigator
            tabBarOptions={
                {
                    style:{
                        elevation:0,
                        shadowOpacity:0,
                        height:64
                    },
                    tabStyle:{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"center"
                    },
                    iconStyle:{
                        flex:0,
                        width:20,
                        height:20,
                    },
                    labelStyle:{
                        fontFamily:"Archivo_700Bold",
                        fontSize:15,
                        marginLeft:16,
                    },
                    inactiveBackgroundColor:"#fafafc",
                    activeBackgroundColor:"#ebebf5",
                    inactiveTintColor:"#c1bccc",
                    activeTintColor:"#8257E5",
                }
            }
        >
            <Screen name="TeacherList" component={TeacherList}
                options={{
                    tabBarLabel:'Proffys',
                    tabBarIcon({color, size ,focused}){
                        return (
                            <Ionicons name='ios-easel'  size={size} color={
                                focused?"#8257E5":color

                                // color==="#8257E5"?"#9871f5":"#c1bccc"
                            } />
                        )
                    }
                }}
            />
            <Screen name="Favorites" component={Favorites} 
                options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon({color,size,focused}){
                        return (
                            <Ionicons name="ios-heart" color={
                                focused?"red":color

                                // color==="#8257E5"?"red":"#c1bccc"
                            } size={size} />
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs