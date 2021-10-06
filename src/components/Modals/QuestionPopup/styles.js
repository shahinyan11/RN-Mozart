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
        paddingVertical: 22,
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
        width: 100,
        height: 150,
        resizeMode: 'stretch'
    },
    textBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: colors.blue,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: ratioWidth * 365,
        fontSize: normalize(28),
        lineHeight: normalize(28) * 1.5,
        fontFamily: 'CormorantGaramond-boldItalic',
        marginVertical: 20,

    },
    buttonBox: {
      marginVertical: 10
    },

    remainedText: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'BreeSerif-regular',
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
    button: {
        margin: 10
    },
    image: {
        width: 95,
        height: 50,
        resizeMode: 'contain'
    },


});

export {styles}
