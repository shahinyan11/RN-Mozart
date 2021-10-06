import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({

    backgroundImage: {
        flex:1,
        resizeMode: 'stretch',
    },
    topCol: {
        minHeight: win.height - 294, // 294 is height of bottomCol
        position: 'relative',
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: ratioWidth * 367,
        alignItems: 'center',
        zIndex: 99999
    },

    squareContain: {
        paddingHorizontal: ratioWidth * 10,
        paddingVertical: ratioHeight * 10,
        flexDirection: 'row',
        width: ratioWidth * 390,
        height: ratioWidth * 387,
    },

    cameraBox:{
        width: ratioWidth * 390,
        height: ratioWidth * 387,
    },

    bottomCol: {
        height: 294,
        paddingTop: 48,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 41
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.width,
    },
});

export {styles}
