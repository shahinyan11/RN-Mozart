import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioWidth, ratioHeight} = data.deviceSizes;

export function createStyles(isBig, isTwoDigits, fontSize) {
    return StyleSheet.create({

        backgroundImage: {
            flex: 1,
            resizeMode: 'stretch',
        },
        topCol: {
            minHeight: win.height - 294,
            position: 'relative',
            paddingHorizontal: ratioWidth * 12,
            paddingBottom: ratioWidth * 367,
            alignItems: 'center',
            zIndex: 99999
        },
        bottomCol: {
            height: 294,
            paddingTop: 48,
            paddingHorizontal: 10,
            alignItems: 'center',
            paddingBottom: 41
        },
        description: {
            fontFamily: 'Montserrat-regular',
            textAlign: 'center',
            color: "#ffffff",
            fontSize: ratioHeight * 14,
            paddingHorizontal: ratioWidth * 12
        },

        title: {
            fontFamily: 'CormorantGaramond-italic',
            textAlign: 'center',
            color: "#ffffff",
            fontSize: 32,
            marginVertical: 10
        },

        squareContent: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 32,
            width: '100%',
        },
        riddleContent: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingHorizontal: ratioHeight * 5,
        },
        numberText: {
            fontFamily: 'EBGaramond-regular',
            position: 'absolute',
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: isTwoDigits ? normalize(300) : isBig ? normalize(550) : normalize(350),
            width: '100%',
            opacity: 0.1,
        },
        text: {
            fontFamily: 'CormorantGaramond-italic',
            color: "#39abd7",
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: fontSize ? normalize(fontSize) : normalize(20),
            width: ratioWidth * 365,
        },
        hintIconBox: {
            position: 'absolute',
            right: 10,
            top: 32,
            zIndex: 999999,
        },
        textTipps: {
            color: colors.blue,
            fontWeight: '700'
        },
        imageStatue: {
            resizeMode: 'stretch',
            width: ratioWidth * 130,
            height: ratioHeight * 200,
        },
        notesText: {
            color: "red",
            marginBottom: 5,
            fontWeight: 'bold',
            fontSize: ratioHeight * 22,
            width: ratioWidth * 365,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255, 0.8)'
        },
        bottomContent: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: win.width,
        },
        inputBox: {
            width: ratioWidth * 390,
            marginBottom: 2,
            marginTop: 10,
            alignItems: "center",
            justifyContent: 'center',
        },

        dateBox: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: ratioHeight * 10,
            marginBottom: ratioHeight * 25,
        },
        dateText: {
            paddingVertical: 5,
            marginRight: 10,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
            textAlign: 'center',

        },

    });
}
