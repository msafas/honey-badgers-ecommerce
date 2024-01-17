import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView,} from 'react-native';
import {  IconButton, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { screenHeight, screenWidth } from '../../utils/sizeHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Slice/cartSlice';
import { styles } from './Style';


export default function ProductDetail(props) {
    const theme = useTheme() as any;
    const navigation = useNavigation() as any;
    const params = props.route.params.item;

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems);
    const isItemInCart = cartItems.some(cartItem => cartItem.id === params.id);

    const handleAddToCart = () => {
        dispatch(addToCart(params));
        navigation.navigate("Basket") as any
    };



    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.safeareviewContainer}>
                <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
            </SafeAreaView>


            <ScrollView >
                <View>
                    <Image source={{ uri: params?.imageUrl }}
                        style={{
                            width: screenWidth,
                            height: screenHeight * 0.4,
                            ...styles.image
                        }}
                    />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={{ ...styles.itemTitle, color: theme.colors.appcolor }}>
                        {params?.name}
                    </Text>

                    <Text style={{ fontSize: 16, fontWeight: '400', color: theme.colors.textGray2, marginTop: 10 }}>
                        {params?.description}
                    </Text>
                    <Text style={{ ...styles.itemProperties, color: theme.colors.textGray2, marginTop: 10 }}>
                        {params?.shippingMethod}
                    </Text>
                    <View>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity
                onPress={handleAddToCart}
                activeOpacity={0.8}
                style={{
                    ...styles.cartConfirmButton,
                    height: screenHeight * 0.05,
                    backgroundColor: theme.colors.buttonGreen,

                }}>
                <View style={styles.cartContainer}>
                    <Text style={styles.cartText}>
                        Sepete Ekle
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
                        }).format(params?.price)} ₺
                    </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}
