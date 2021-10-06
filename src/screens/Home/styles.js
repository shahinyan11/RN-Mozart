import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from '../../services/styles';
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
    },
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 100000
    },
    topCol: {
        // minHeight: win.height - 274,
        position: 'relative',
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: ratioWidth * 367,
        alignItems: 'center',
        zIndex: 99999
    },
    mainTitle: {
        color: "#ffffff",
        textAlign: 'center',
        fontFamily: 'CormorantGaramond-italic',
        marginTop: 24,
        marginBottom: 8,
        fontSize: 48
    },
    title: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.6,
        marginTop: 8,
        marginBottom: 12,
    },

    mozartBox: {
        flexDirection: 'row',
        width: ratioWidth * 390,
        height: ratioWidth * 387,
    },
    imgMozartContainer: {
        flex: 0.65,
    },

    imgMozart: {
        resizeMode: 'stretch',
        position: 'absolute',
        left: ratioWidth * -12,
        bottom: 0,
        width: ratioWidth * 245,
        height: ratioWidth * 349
    },
    titlesContainer: {
        height: '100%',
        position: 'absolute',
        alignItems: 'flex-start',
        left: ratioWidth * 238,
        paddingTop: 63,
    },
    textBox: {
        marginBottom: 8,
        borderRadius: 7,
        backgroundColor: colors.blue,
        padding: 7,
    },
    text: {
        fontFamily: 'CormorantGaramond-boldItalic',
        fontSize: ratioWidth  * 20,
        lineHeight: ratioWidth * 21.45,
        color: '#FFF',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: colors.blue,
        position: 'absolute',
        bottom: 0.3,
        left: -5,
    },
    bottomCol: {
        // height: 274,
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

});

export {styles}
