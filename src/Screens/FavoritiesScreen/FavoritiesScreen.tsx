import React, { useEffect, useState } from 'react'
import { Alert, KeyboardAvoidingView, Linking, Platform, RefreshControl, SafeAreaView, ScrollView, Modal, TouchableOpacity, View, Text, Image, FlatList, StatusBar } from 'react-native';

import { Button, IconButton, TextInput, useTheme, Checkbox, Portal, Card, Searchbar, FAB } from 'react-native-paper';

import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { screenHeight, screenWidth } from '../../utils/sizeHelper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteAction } from '../../Redux/Slice/favoritesSlice';
import { styles } from './Style';





// login screen

export default function Favorities() {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const favoriteList = useSelector(state => state.favorites.favoriteList);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log('Favori Ürünler:', favoriteList);
    }, [favoriteList]);

    const handleRemoveFavorite = (item) => {

        dispatch(toggleFavoriteAction(item));

    };

    const confirmRemoveFavorite = (item) => {
        Alert.alert(
            'Favorilerden Kaldır',
            'Bu ürünü favorilerden kaldırmak istediğinizden emin misiniz?',
            [
                {
                    text: 'Evet',
                    onPress: () => handleRemoveFavorite(item),
                },
                {
                    text: 'Hayır',
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    const renderItem = ({ item }: { item: any }) => (
        <View style={{
            borderColor: theme.colors.textGray,

        



        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ProductDetail', {
                        item: item
                    });

                }

                }
                activeOpacity={1}
                style={{
                    flex: 1
                }}>


                <View style={{
                    flexDirection: "row",
                    flex: 1
                }}>


                    <Image source={{ uri: item.imageUrl }}
                        style={{
                            width: screenWidth * 0.2,
                            resizeMode: "contain",
                            margin: 5,


                        }}
                    />


                    <View style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: 1


                    }}>
                        <Text style={{
                            flex: 1,
                            margin: 5,
                            marginTop: 10,
                            fontSize: 15,
                        }}>
                            {item.name}
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: 1,


                        }}>


                            <Text style={{
                                margin: 5,
                                color: theme.colors.buttonGreen,
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                {new Intl.NumberFormat('tr-TR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(item?.price)} ₺
                            </Text>
                        </View>

                    </View>
                    {/* //removeFavorite */}
                    <View style={{
                        margin: 10,
                        padding: 10
                    }}>

                        <AntDesign
                            style={{
                                padding: 10
                            }}
                            name="heart"
                            size={25}
                            color={"red"}
                            onPress={() => {
                                confirmRemoveFavorite(item);

                            }}
                        />
                    </View>

                </View>

            </TouchableOpacity>

        </View>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeareViewContainer}>
                <View style={styles.safeareViewContainer2}>
                    <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
                    <Text style={styles.homeTittle}>
                        Favoriler
                    </Text>

                </View>
            </SafeAreaView>

            <FlatList
                data={favoriteList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            // Alert.alert("Yenilendi")
                        }}
                    />
                }
                ListEmptyComponent={() => (
                    <View style={styles.listEmptyContainer}>
                        <View>
                            <AntDesign
                                style={{
                                    padding: 10
                                }}
                                name="heart"
                                size={100}
                                color={theme.colors.textGray}
                            />
                        </View>
                        <Text style={{
                                    ...styles.listEmptyText,
                                    color: theme.colors.textGray
                                }}>
                            Favori Ürün Bulunamadı
                        </Text>
                        <Button
                            onPress={() => {
                                navigation.navigate("Products")
                            }}
                            style={{
                                ...styles.listEmptyButton,
                                backgroundColor: theme.colors.buttonGreen,
                            }}>
                            <Text style={styles.listEmptyButtonText}>
                                Ürünlere Git
                            </Text>
                        </Button>
                    </View>
                )
                }
            />
        </View>

    )
}