import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    scrollView: {
        minHeight: win.height,
    },
    scrollViewOriented: {
        minHeight: win.width,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(57, 171, 215, 0.5)',
        paddingHorizontal: win.width / deviceSizes.width * 12,
        // paddingTop: 50
    },
    containerOriented: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(57, 171, 215, 0.5)',
        justifyContent: 'space-between',
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    col_1: {
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        paddingVertical: 10,
        alignItems: 'center',
        // position: 'absolute',
        zIndex: 100,
        top: 0,
        width: win.width,
        paddingHorizontal: win.width / deviceSizes.width * 25,
    },

    titleContain: {
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390,
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: "white",
        fontSize: win.width / deviceSizes.width * 48,
    },

    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },


    voiceIcon: {
        width: win.width / deviceSizes.width * 96,
        height: win.width / deviceSizes.width * 82,
        marginRight: win.width / deviceSizes.width * 10,

    },
    meter: {
        // flex: 1,
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    voiceMeterIcon: {
        width: win.width / deviceSizes.width * 382,
        height: win.width / deviceSizes.width * 175,
        // marginRight: win.width / deviceSizes.width * 10,
    },

    animatedView: {
        position: 'absolute',
        right: '48%',
        bottom: win.width / deviceSizes.width * -140,
        height: win.width / deviceSizes.width * 280,
        width: win.width / deviceSizes.width * 38,
    },
    slackIcon: {
        resizeMode: 'contain',
        width: win.width / deviceSizes.width * 38,
        maxHeight: win.width / deviceSizes.width * 140,
        marginTop: win.width / deviceSizes.width * 18,
    },
    col_3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

    },
});

export {styles}
