import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Linking } from "react-native";
import { useTheme } from "react-native-paper";


import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import HomeBottomBar from "./BottomBar/HomeBottomBar";
import ProductDetail from "../Screens/ProductDetail/ProductDetail";
import MapScreen from "../Screens/MapScreen/MapScreen";


const Stack = createNativeStackNavigator();

export function AppRouter(props: any) {

    const theme = useTheme() as any;
    return (<>

        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: theme.colors.background
            }

        }} initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeBottomBar" component={HomeBottomBar} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="MapScreen" component={MapScreen} />




        </Stack.Navigator>

    </>)
}

