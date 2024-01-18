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
    listTouchable: {
        flex: 1,
        marginTop: 10,
        marginBottom: 0,
        marginVertical: 20,
        justifyContent: 'center',
        margin: 5,
    },
    listCard: {
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
    },
    listImage: {
        borderRadius: 10,
        alignSelf: 'center',
        flex: 1,
    },
    favoriteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 1,
    },
    itemNameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 10,
    },
    itemNameText: {
        margin: 5,
        fontSize: 15,
        flex: 1,
    },
    descButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    descButtonText: {
        margin: 5,
        fontSize: 12,
        flex: 1,

    },
    itemPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    itemPriceText: {
        margin: 2,
        fontSize: 16,

        fontWeight: 'bold',
    },
    bottomSheetDesc: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10 ,
    },
 






}) 