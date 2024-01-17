import React, { createContext, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider, ThemeProvider, withTheme, DefaultTheme } from "react-native-paper";
import { useConfig } from "./ConfigProvider";


const AppThemeContext = createContext({});

interface AppThemeState {
    isDarkMode: boolean;
    theme: any;
    themes: { [key: string]: any };
    setTheme: (dark: boolean) => void;
}

export function useAppTheme() {
    return useContext(AppThemeContext) as AppThemeState;
}


const themes = {
    'dark': withTheme({
        ...DefaultTheme,
        dark: true,
        colors: {
            ...DefaultTheme.colors,
            appColor: '#000',
        },
        voc: {
            ...DefaultTheme.colors,
            appColor: '#000',
        }
    } as any),
    'light': withTheme({
        ...DefaultTheme,
        dark: false,


        colors: {
            ...DefaultTheme.colors,
            primary:"#101010",
            appColor: "#101010",
            textGray:"#c9c9c9",
            textGray2:"#AFB1B1",
            borderGray: "#AEAEAE",
            placeholder: "#c9c9c9",
            bgGray:"#e7e7e7",
            appRed:"#f55c5c",
            buttonGreen:"#45AAB8"
            



        },


        roundness: 30
    } as any)
}

export function AppThemeProvider(props: any) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState<any>(themes["light"] as any);
    const { config, getConfigParameter } = useConfig();

    useEffect(() => {
        setTheme(themes[isDarkMode ? "dark" : "light"] as any);
    }, [isDarkMode]);

    useEffect(() => {
        setIsDarkMode(getConfigParameter("isDarkMode"));
    }, [config.isDarkMode]);

    return (
        <AppThemeContext.Provider value={{
            isDarkMode,
            theme,
            themes: props.themes,
            setTheme: setIsDarkMode
        }}>
            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <Provider theme={theme}>
                    {props.children}
                </Provider>
            </View>
        </AppThemeContext.Provider>
    );
}


