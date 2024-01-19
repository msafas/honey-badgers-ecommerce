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
import BottomSheet from "@gorhom/bottom-sheet";
import { styles } from './Style';
import { st } from 'make-plural';



// login screen

export default function ProductsScreen() {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const toast = useToast();
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [itemDesc, setItemDesc] = useState("")
    const bottomSheetRef = useRef(null);

    const handleClosePress = () => bottomSheetRef.current.close();
    const handOpenPress = () => bottomSheetRef.current.collapse();
    const snapPoints = useMemo(() => [250], []);
    async function productList() {
        setLoading(true)

        const response = await fetch('https://honey-badgers-ecommerce.glitch.me/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Veri çekme hatası:', error));
        setLoading(false)

    }
    useEffect(() => {
        productList()
    }, [])

    const dispatch = useDispatch();
    const favoriteList = useSelector((state) => state.favorites.favoriteList);

    const toggleFavorite = (item) => {
        dispatch(toggleFavoriteAction(item));
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
            </SafeAreaView>
            <Spinner visible={loading} />
            <View style={{
                marginBottom:screenHeight*0.11
            }}>
                <StatusBar backgroundColor={theme.colors.appcolor} style="dark" />
                <View >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: theme.colors.appColor,
                        ...styles.homeTittle
                    }}>
                        Ürünler
                    </Text>
                </View>
           
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    key={2}
                    style={{
                        margin: 10,


                    }}
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                navigation.navigate("ProductDetail", {
                                    item: item,
                                })

                            }}
                            style={{...styles.listTouchable,
                                maxWidth: screenWidth * 0.45,
                            }}>
                            <Card
                                style={styles.listCard}>
                                <Image
                                    source={{
                                        uri: item.imageUrl,
                                    }}
                                    style={{
                                        ...styles.listImage,
                                        height: screenHeight * 0.15,
                                        width: screenWidth * 0.44,
                                    }} />

                                <TouchableOpacity
                                    style={styles.favoriteButton}
                                    onPress={() => toggleFavorite(item)}>
                                    <Text style={{
                                        fontSize: 35,
                                        color: favoriteList.includes(item) ? "red" : "white"
                                    }}>♥</Text>
                                </TouchableOpacity>
                                <View
                                    style={styles.itemNameView} >
                                    <Text
                                        style={styles.itemNameText}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                setItemDesc(item.description)
                                                handOpenPress()

                                            }
                                        }
                                        style={styles.descButton}>
                                        <Text style={{ ...styles.descButtonText }}>
                                            Detayları Görüntüle
                                        </Text>

                                    </TouchableOpacity>
                                </View>


                                <View
                                    style={styles.itemPriceContainer}>
                                    <Text
                                        style={{ ...styles.itemPriceText, color: theme.colors.textGray, }} >
                                        {new Intl.NumberFormat('tr-TR', {
                                            style: 'decimal',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(item?.price)} ₺
                                    </Text>
                                </View>
                            </Card>

                        </TouchableOpacity>



                    )}

                />
           

            </View>
         
            <BottomSheet
                enablePanDownToClose
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                style={styles.bottomSheet}            >
                <View>
                    <Text style={{
                        color: theme.colors.textGray2, ...styles.bottomSheetDesc
                    }}>
                        {itemDesc}
                    </Text>
                </View>
            </BottomSheet>
            
        </View>

    )
}