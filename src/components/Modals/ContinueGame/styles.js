import {StyleSheet, Dimensions} from 'react-native'
import data from "../../../services/data";
import {colors} from "../../../services/styles";
import {normalize} from "../../../services/helpers";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    modalContain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    messageBox: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: deviceSizes.ratioWidth * 390,
        padding: 24,

    },

    title: {
        fontFamily: 'CormorantGaramond-boldItalic',
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.31,
        letterSpacing: 0.33,
        textAlign: 'center',
        color: '#241920',
        marginVertical: 14,
    },

    text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-regular',
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.73,
        marginBottom: 24,
        fontWeight: '500',
        color: '#241920'
    },

    image: {
        width: 95,
        height: 50,
        resizeMode: 'contain'
    },

    square: {
        position: 'absolute',
        backgroundColor: colors.blue,
        width: 5,
        height: 5,
    },
});

export {styles}
