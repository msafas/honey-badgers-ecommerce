import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, ScrollView, Modal, TouchableOpacity, View, Text, Image, FlatList, StatusBar } from 'react-native';

import { Button, IconButton, TextInput, useTheme, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { screenHeight, screenWidth } from '../../utils/sizeHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../../Redux/Slice/cartSlice';
import { styles } from './Style';





// login screen

export default function Basket() {
    const theme = useTheme() as any
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCartPrice = useSelector(state => state.cart.totalAllItemsPrice);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

    };

    const handleRemoveFromCart = (item) => {
        console.log(item, "item")
        dispatch(removeFromCart(item));

    };

    const handleConfirmCart = () => {
        dispatch(clearCart());
    }

    const confirmCart = () => {
        Alert.alert(
            'Sepeti Onayla',
            'Sepeti onaylamak istediğinizden emin misiniz?',
            [
                {
                    text: 'Evet',
                    onPress: () => handleConfirmCart(),
                },
                {
                    text: 'Hayır',
                    style: 'cancel',
                },
            ],
            { cancelable: false }

        );
    }

    const renderItem = ({ item }: { item: any }) => (
        <View style={{
            borderColor: theme.colors.textGray,
            ...styles.listContainer

        }}>
            <View style={styles.listContainer2}>
                <Image source={{ uri: item.imageUrl }}
                    style={styles.image}
                />
                <View style={styles.listDetailContainerMain}>
                    <Text style={{
                        flex: 1,
                        margin: 5,
                        marginTop: 10,
                        fontSize: 12,
                    }}>
                        {item.name}
                    </Text>
                    <View style={styles.quantityContainer}>

                    <View style={{...styles.controlButtonContainer,    borderColor: theme.colors.textGray,}}>
                            <TouchableOpacity onPress={() => {
                                handleRemoveFromCart(item)
                            }}>
                                <AntDesign name="minuscircleo" size={20} color={theme.colors.primary} />
                            </TouchableOpacity>
                            <View style={styles.quantityTextContainer}>

                            <Text style={{...styles.quantityText,  color: theme.colors.buttonGreen,}}>{item.quantity}</Text>
                            </View>

                            <TouchableOpacity onPress={() => {
                                handleAddToCart(item)
                            }}>
                                <AntDesign name="pluscircleo" size={20} color={theme.colors.buttonGreen} />
                            </TouchableOpacity>

                        </View>
                        <Text style={{...styles.priceText,color: theme.colors.buttonGreen,}}>
                            {new Intl.NumberFormat('tr-TR', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(item?.price)} ₺
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeareViewContainer}>
                <View style={styles.safeareViewContainer2}>
                    <View style={styles.safeareViewContainer3}>
                        <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
                        <Text style={styles.homeTittle}>
                            Sepet
                        </Text>
                    </View>
                    <IconButton
                        icon="trash-can-outline"
                        iconColor='red'
                        size={25}
                        onPress={() => {
                            dispatch(clearCart());
                        }} />
                </View>
            </SafeAreaView>

            <ScrollView style={styles.scrollView}>

                <FlatList
                    style={styles.list}
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => {
                        return (
                            <View style={styles.listEmptyContainer}>
                                <View>
                                    <AntDesign name="shoppingcart" size={50} color={theme.colors.textGray} />
                                </View>

                                <Text style={{
                                    ...styles.listEmptyText,
                                    color: theme.colors.textGray
                                }}>
                                    Sepetiniz Boş
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
                                        Alışverişe Başla
                                    </Text>
                                </Button>
                            </View>
                        )
                    }
                    }
                />

            </ScrollView>

            {
                cartItems.length > 0 &&

                <TouchableOpacity
                    onPress={confirmCart}
                    activeOpacity={0.8}
                    style={{
                        ...styles.cartConfirmButton,
                        height: screenHeight * 0.05,
                        backgroundColor: theme.colors.buttonGreen,


                    }}>
                    <View style={styles.cartContainer}>
                        <Text style={styles.cartText}>
                            Sepeti Onayla
                        </Text>
                    </View>
                    <View style={{
                        borderColor: theme.colors.bgGray,
                        ...styles.cartPriceContainer
                    }}>
                        <Text style={{
                            color: theme.colors.buttonGreen,
                            fontWeight: "bold"
                        }}>
                            {new Intl.NumberFormat('tr-TR', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(totalCartPrice)} ₺
                        </Text>
                    </View>
                </TouchableOpacity>
            }

        </View>

    )
}