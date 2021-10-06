import {StyleSheet} from 'react-native'
import data from "../../../services/data";
import {colors} from "../../../services/styles";
import {normalize} from "../../../services/helpers";

const {ratioWidth, ratioHeight} = data.deviceSizes;

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
        paddingHorizontal: ratioWidth * 24,
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

    icon: {
        width: 96,
        height: 76,
        resizeMode: 'stretch'
    },

    textBox: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
        color: '#241920',
        textAlign: 'center',
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.5,
        fontFamily: 'CormorantGaramond-boldItalic',
    },
    inputBox: {
        justifyContent: 'center',
        marginBottom: ratioHeight * 20,
        width: '100%'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#39abd7',
        fontSize: ratioHeight * 25,
        color: colors.blue
    },
    label:{
        fontFamily: "BreeSerif-regular",
        color: colors.blue,
        fontSize: normalize(16),
        lineHeight: normalize(16) * 1.5
    },


    remainedText: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'BreeSerif-regular',
    },
    blue: {
        color: '#39abd7',
        textTransform: 'capitalize'
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
