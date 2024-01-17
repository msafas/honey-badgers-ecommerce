import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'

    },

    safeareViewContainer: {
        justifyContent: "center",
    },
    safeareViewContainer2: {
        flexDirection: "row",
        alignItems: "center",
    },
    safeareViewContainer3: {

        flexDirection: "row",
        alignItems: "center",
    },
    homeTittle: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    },
    scrollView: {
        flex: 1,
    },
    list: {
        marginVertical: 10,
    },
    listEmptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: 50
    },
    listEmptyText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    listEmptyButton: {
        margin: 20,
        borderRadius: 10
    },
    listEmptyButtonText: {

        color: "white"
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
    cartText: {
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