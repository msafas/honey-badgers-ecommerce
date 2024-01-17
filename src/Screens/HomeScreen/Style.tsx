import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    safeareViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20
    },
    safeareViewContainer2: {

        flexDirection: "row",
        flex: 1,
    },
    safeareViewContainer3: {

        height: 50,
        width: 50,
        borderRadius: 100
    },
    avatarImage: {

        height: 50,
        width: 50,
        borderRadius: 100
    },
    homeTittle: {

        margin: 10,
    },
    tittle: {
        fontSize: 18,

    },
    adressButton: {
        margin: 10,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    listTitle: {
        margin: 10,
    },
    bottomSheet: {

        elevation: 10,
        borderColor: "gray",
        borderWidth: 1
    },
    bottomSheetContainer: {

        flex: 1, marginHorizontal: 10
    },
    bottomsheetAdress: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 10
    },
    changeAdressButton: {
        marginTop: 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        color: "white",
    },
    changeAdressText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },

}) 