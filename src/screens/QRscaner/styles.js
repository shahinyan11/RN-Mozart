import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: win.width / deviceSizes.width * 350,
        padding: 35,
        paddingBottom: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    element: {
        width: win.width / deviceSizes.width * 189,
        height: win.width / deviceSizes.width * 188,
        marginBottom: 12
    },
    container: {
        minHeight: win.height,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    topCol: {
        flex:1,
    },
    bottomCol: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 20
    },

    squareContain: {
        zIndex: 100,
        position: 'relative',
        flex: 1,
        overflow: 'hidden'
    },

    RNCamera : {
        flex: 1
    },

    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.width,
    },

    modalClose: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 34,
        height: 34,
        top: 19,
        right: 19
    },
    closeImage: {
        width: 24,
        height: 24,
    },

});

export {styles}
