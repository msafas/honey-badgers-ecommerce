import { View, Image, Touchable } from 'react-native'
import React, { useEffect } from 'react'
import { BottomNavigation, Card, Text, useTheme } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import Basket from '../../Screens/BasketScreen/BasketScreen';
import Favorities from '../../Screens/FavoritiesScreen/FavoritiesScreen';
import ProductsScreen from '../../Screens/ProductsScreen/ProductsScreen';
import ProductDetail from '../../Screens/ProductDetail/ProductDetail';





const Tab = createBottomTabNavigator();

export default function HomeBottomBar(props) {
    const theme = useTheme();
    const navigation = useNavigation();


    return (
        <View style={{
            flex: 1,
            backgroundColor: "transparent",
        }}>

            <Tab.Navigator
                id='TabNavigatorId'
                defaultScreenOptions={
                    {
                        title: 'Centered',
                        headerTitleAlign: 'center'
                    }
                }

                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        borderWidth: 1,
                        backgroundColor: theme.colors.primary,
                        alignContent: "center",
                        justifyContent: "center",
                        headerTitleAlign: 'center',
                        borderTopEndRadius: 20,
                        borderTopStartRadius: 20,

                    },

                    headerTitleStyle: {
                        color: theme.colors.primary,

                    },

                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,


                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Home") {
                            return (
                                <SimpleLineIcons
                                    name={
                                        focused
                                            ? 'home'
                                            : 'home'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                        else if (route.name === "Favorities") {
                            return (
                                <MaterialIcons
                                    name={focused ? 'favorite' : 'favorite'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                        else if (route.name === "Basket") {
                            return (
                                <Fontisto
                                    name={focused ? 'shopping-basket' : 'shopping-basket'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                        else if (route.name === "Products") {
                            return (
                                <Entypo
                                    name={focused ? 'list' : 'list'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }

                        else if (route.name === "Profile") {
                            return (
                                <AntDesign
                                    name={focused ? 'user' : 'user'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: '#A0A0A0',
                    tabBarActiveTintColor: "white",
                })}  >
                <Tab.Screen name={"Home"} component={HomeScreenStack} />
                <Tab.Screen name={"Favorities"} component={Favorities} />
                <Tab.Screen name={"Basket"} component={Basket} />
                <Tab.Screen name={"Products"} component={ProductsScreen} />

            </Tab.Navigator>
        </View>
    );
}


const Stack = createNativeStackNavigator();
function HomeScreenStack(props) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}

            initialRouteName={'Home'}>
            <Stack.Screen name="Home" key={'Home'} component={HomeScreen}/>

        </Stack.Navigator>
    );
}




