import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        minHeight: win.height,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    containerOriented: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    col_1: {
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        width: win.width,
        paddingTop: win.width / deviceSizes.width * 10,
        paddingBottom: win.width / deviceSizes.width * 25,
    },
    col_1Oriented: {
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        paddingVertical: 16,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        width: win.height,
        paddingHorizontal: win.height / deviceSizes.width * 25,
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center',
        width: win.height / deviceSizes.width * 390
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: "white",
        fontSize: win.width / deviceSizes.width * 48,
    },

    mapIcon: {
        width: win.width / deviceSizes.width * 37,
        height: win.width / deviceSizes.width * 33,
        marginRight: win.width / deviceSizes.width * 10,

    },

    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },
    col_2: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // width: win.width,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    iconContain: {
        alignItems: 'center',
        width: win.width / deviceSizes.width * 180
    },
    iconContainOriented: {
        alignItems: 'center',
        width: win.height / deviceSizes.width * 180
    },

    text: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },
    col_3:{
        height: 20,
        width: win.width,
    },
    col_3Oriented:{
        height: 20,
        width: win.height,
    },
    bottomText: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.width / deviceSizes.width * 28
    },
    bottomTextOriented: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.height / deviceSizes.width * 28
    }
});

export {styles}
