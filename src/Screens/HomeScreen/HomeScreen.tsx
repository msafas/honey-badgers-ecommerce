import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Alert, KeyboardAvoidingView, Linking, Platform, RefreshControl, SafeAreaView, ScrollView, Modal, TouchableOpacity, View, Text, Image, FlatList } from 'react-native';

import { Button, IconButton, TextInput, useTheme, Checkbox, Portal, Card, Searchbar, Icon } from 'react-native-paper';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { screenHeight, screenWidth } from '../../utils/sizeHelper';
import { ToastType, useToast } from '../../Contexts/ToastProvider';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteAction } from '../../Redux/Slice/favoritesSlice';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { as } from 'make-plural';
import BottomSheet from "@gorhom/bottom-sheet";
import { styles } from './Style';
import { setAddress, setLoca } from '../../Redux/Slice/locationSlice';



export default function HomeScreen() {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const toast = useToast();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const bottomSheetRef = useRef(null);

    const handleClosePress = () => bottomSheetRef.current.close();
    const handOpenPress = () => bottomSheetRef.current.collapse();
    const snapPoints = useMemo(() => [250], []);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            (async () => {
                const address = await AsyncStorage.getItem('address');
                const location = await AsyncStorage.getItem('location');
                if (address) {
                    dispatch(setAddress(address))
                }
                if (location) {
                    dispatch(setLoca(location))
                }
            }
            )();
        });
        return unsubscribe;

    }, [navigation])

    const address = useSelector(state => state?.location?.address);
    const handleAdress = () => {
        if (address) {
            handOpenPress()
        }
        else {
            navigation.navigate("MapScreen")
            handleClosePress()
        }
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.safeareViewContainer}>
                    <View style={styles.safeareViewContainer2}>
                        <View style={styles.safeareViewContainer3}>
                            <Image
                                source={{
                                    uri: "data:image/jpeg;base64,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"
                                }}
                                style={styles.avatarImage}
                            />
                        </View>
                        <View style={styles.homeTittle}>
                            <Text style={{
                                ...styles.tittle,
                                color: theme.colors.textGray
                            }}>
                                Merhaba 👋
                            </Text>
                            <Text style={{
                                ...styles.tittle,
                                color: theme.colors.appColor,
                                fontWeight: "500"
                            }}>
                                NTT Data
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <Spinner visible={loading} />
            <View>
                <StatusBar
                    backgroundColor={theme.colors.appcolor}
                    style="dark"
                />

                <TouchableOpacity style={{
                    ...styles.adressButton,
                    backgroundColor: theme.colors.textGray,

                }}
                    onPress={() => handleAdress()} >

                    <Text>
                        {/* Teslimat Adresini Seç */}
                        {address ? address : "Teslimat Adresini Seç"}
                    </Text>
                </TouchableOpacity>


            </View>
            <BottomSheet
                enablePanDownToClose
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                style={styles.bottomSheet}
            >
                <View style={styles.bottomSheetContainer}>
                    <Text style={{
                        ...styles.tittle,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>
                        Adresim
                    </Text>
                    <View style={styles.bottomsheetAdress}>
                        <SimpleLineIcons name="location-pin" size={24} color="black" />
                        <Text
                            style={{
                                fontSize: 16,
                            }}
                        >
                            {address}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: theme.colors.appColor, ...styles.changeAdressButton

                        }}
                        onPress={() => navigation.navigate("MapScreen")}
                    >
                        <Text style={styles.changeAdressButton}>
                            Adresi Değiştir
                        </Text>
                    </TouchableOpacity>
                </View>


            </BottomSheet>
        </View>

    )
}