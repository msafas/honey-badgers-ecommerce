import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";



export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    safeareviewContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },
    image: {
        resizeMode: "contain"
    },
    detailContainer: {
        flex: 1,
        marginTop: 30,
        margin: 10
    },
    itemTitle: {
        fontSize: 25,
        fontWeight: '600',
    },
    itemProperties: {
        fontSize: 16,
        fontWeight: '400',
    },
    cartConfirmButton: {
        marginBottom: 30,
        flexDirection: "row",
        margin: 20,
        borderRadius: 10,
    },
    cartContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    cartText :{
        color: "white"
    },
    cartPriceContainer: {
        flex: 1.2,
        justifyContent: "center",
        backgroundColor: "white",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },









}) 