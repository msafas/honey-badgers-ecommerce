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
        justifyContent: "space-between"
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
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        borderBottomWidth: 0.5,
    },
    listContainer2: {
        flexDirection: "row",
        flex: 1
    },
    image:{
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: "contain",
        margin: 5,
    
    },

    listDetailContainerMain: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1

    },
    quantityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      },
      controlButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 20,
        borderWidth: 1,
    
        padding: 5,
        marginVertical: 10,
      },
      controlButton: {
        marginHorizontal: 10,
        borderRadius: 30,
      },
      quantityTextContainer: {
        backgroundColor: 'rgba(69, 170, 184, 0.3)',
        borderRadius: 30,
        padding: 2,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      quantityText: {
        marginHorizontal: 10,
        borderRadius: 30,
      
      },
      priceText: {
        margin: 5,
        fontWeight: "bold",
        fontSize: 16,
      },







}) 