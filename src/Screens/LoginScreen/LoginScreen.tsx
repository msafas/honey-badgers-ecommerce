// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import styles from './Style';


export default function LoginScreen() {
    const theme = useTheme() as any
    const navigation = useNavigation() as any
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollView}
                keyboardShouldPersistTaps="handled"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/shop-svgrepo-com.png')}
                            style={styles.logo}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textHeader}>Tekrar hoşgeldiniz!</Text>
                        <Text style={styles.textSubHeader}>Hesaba giriş yapın</Text>
                        <CustomTextInput
                            label="Kullanıcı Adı"
                            value={username}
                            onChangeText={setUsername}
                            keybordType="default"
                            disabled={false}
                            iconName="mail"

                        />
                        <CustomTextInput
                            label="Parola"
                            value={password}
                            onChangeText={setPassword}
                            keybordType="default"
                            disabled={false}
                            iconName="lock"
                            securetextEntry={true}

                        />
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', marginRight: 5 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.replace('ForgotPassword');
                                }}
                            >
                                <Text style={styles.forgotPassword}>Şifremi unuttum</Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            onPress={() =>
                                navigation.navigate("HomeBottomBar")

                            }
                            contentStyle={{
                                ...styles.buttonContent,
                                backgroundColor: theme.colors.appcolor
                            }}

                            mode='contained'
                            style={styles.button}>
                            <Text style={styles.buttonText}>Giriş Yap</Text>
                        </Button>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
