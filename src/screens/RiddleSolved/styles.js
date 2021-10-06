import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container:{
        minHeight: win.height,
        paddingHorizontal: 12,
        flexDirection: 'column',
        paddingVertical: 20,
        justifyContent: 'space-between',
    },

    squareContain:{
        zIndex: 100,
        alignItems: 'center',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 610,
    },
    squareContainOriented:{
        zIndex: 100,
        alignItems: 'center',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 390,
    },

    squareBackground: {
        resizeMode: 'contain',
        paddingTop: 10,
        // opacity: 0.2
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 610,
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
        height: win.height / deviceSizes.width * 385,
        width: win.height / deviceSizes.width * 390,
    },

    imgMozartContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },

    imgMozart: {
        resizeMode: 'contain',
        bottom: 0,
        height: win.width / deviceSizes.width * 344,
        width: win.width / deviceSizes.width * 289
    },
    imgMozartOriented: {
        resizeMode: 'contain',
        bottom: 0,
        height: win.height / deviceSizes.width * 350,
        width: win.height / deviceSizes.width * 295,
    },
    imgSolved:{
        resizeMode: 'contain',
        bottom: 0,
        height: win.width / deviceSizes.width * 233,
        width: win.width / deviceSizes.width * 342
    }

});

export {styles}
