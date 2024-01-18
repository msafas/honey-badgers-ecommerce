import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, IconButton, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ha } from 'make-plural';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Style';
import { setAddress, setLoca } from '../../Redux/Slice/locationSlice';


export default function MapScreen() {
    const navigation = useNavigation() as any
    const [location, setLocation] = useState(null);
    const address = useSelector((state) => state.location.address);

    const [selectedLocation, setSelectedLocation] = useState(null);
    const theme = useTheme() as any
    const dispatch = useDispatch() as any



    useEffect(() => {

        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Konum izni reddedildi.');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
            dispatch(setLoca(currentLocation.coords))
        })();
    }, []);

    const handleMapPress = async (e) => {

        const selectedLocation = e.nativeEvent.coordinate;
        setLocation(selectedLocation);
        dispatch(setLoca(selectedLocation))


        const addressResponse = await Location.reverseGeocodeAsync({
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
        });

        const formattedAddress =
            addressResponse && addressResponse.length > 0
                ? `${addressResponse[0].name}, ${addressResponse[0].street}, ${addressResponse[0].city}`
                : 'Adres bulunamadı';

        dispatch(setAddress(formattedAddress))

    };

    const handleSaveAddress = async () => {
        try {

            await AsyncStorage.setItem('address', address);
            await AsyncStorage.setItem('location', JSON.stringify(location));
            navigation.goBack();
        } catch (error) {
            console.error('Adres kaydedilemedi.');
        }
    }

    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <IconButton
            icon="arrow-left"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <Text style={{...styles.headerText, color: theme.colors.appColor,}}>Adres Seç</Text>
        </SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location ? location.latitude : 39.9334,
            longitude: location ? location.longitude : 32.8597,
            latitudeDelta: 8,
            longitudeDelta: 8,
          }}
          onPress={handleMapPress}
        >
          {location && <Marker coordinate={location} title="Seçilen Konum" />}
        </MapView>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleSaveAddress}
            style={styles.continueButton}
          >
            Devam Et
          </Button>
        </View>
      </View>
    );
}

