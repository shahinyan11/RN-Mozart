import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({

    contain: {
        width: win.width,
        paddingHorizontal: ratioWidth * 12
    },
    backIcon: {
        position: 'absolute',
        zIndex: 999,
        left: ratioWidth * 5,
    },
    titleContain: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageIcon: {
        resizeMode: 'stretch',
        width: ratioWidth * 34,
        height: ratioWidth * 39,
        marginRight: ratioWidth * 10,

    },
    text: {
        fontFamily: 'CormorantGaramond-boldItalic',
        color: "#ffffff",
        maxWidth: ratioWidth * 350,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: normalize(46),
    },
});

export {styles}
