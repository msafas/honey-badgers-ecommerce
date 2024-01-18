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
    listContainer: {
        flexDirection: "row",
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        resizeMode: "contain",
        margin: 5,

    },
    listDetailContainerMain: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },
    textName: {

        flex: 1,
        margin: 5,
        marginTop: 10,
        fontSize: 15,
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    priceText: {
        margin: 5,
        fontWeight: "bold",
        fontSize: 16
    },
    removeFavorite: {
        margin: 10,
        padding: 10
    }



}) 