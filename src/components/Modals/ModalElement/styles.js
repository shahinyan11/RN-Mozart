import {StyleSheet} from 'react-native'
import data from "../../../services/data";
import {colors} from "../../../services/styles";
import {normalize} from "../../../services/helpers";

const {ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    modalContain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#cf957d'
    },

    squareContain: {
        width: ratioWidth * 390,
        height: ratioWidth * 387,
        paddingHorizontal: ratioWidth * 15,
        paddingTop: 22,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative'
    },

    squareBackground: {
        position: "absolute",
        resizeMode: 'stretch',
        width: ratioWidth * 390,
        height: ratioWidth * 387,
    },

    air_icon: {
        width: 106,
        height: 123,
        resizeMode: 'stretch'
    },
    earth_icon: {
        width: 146,
        height: 106,
        resizeMode: 'stretch'
    },
    fire_icon: {
        width: 88,
        height: 125,
        resizeMode: 'stretch'
    },
    water_icon: {
        width: 81,
        height: 129,
        resizeMode: 'stretch'
    },
    textBox: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    takeText: {
        color: '#241920',
        textAlign: 'center',
        width: ratioWidth * 365,
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.5,
        fontFamily: 'CormorantGaramond-boldItalic',
    },
    attachText: {
        color: '#241920',
        textAlign: 'center',
        width: ratioWidth * 365,
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.5,
        fontFamily: 'CormorantGaramond-boldItalic',
    },

    countBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        color: '#ffffff',
        textAlign: 'center',
        width: ratioWidth * 32,
        height: ratioWidth * 32,
        backgroundColor: colors.blue,
        textAlignVertical: 'center',
        marginRight: ratioWidth * 8,
        borderRadius: ratioWidth * 32,
    },
    remainedText: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'BreeSerif-regular',
    },
    blue: {
        color: colors.blue,
        textTransform: 'capitalize'
    },

    // element: {
    //     width: ratioWidth * 189,
    //     height: ratioWidth * 188,
    //     marginBottom: ratioWidth * 12,
    //     resizeMode: "contain"
    // },

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
