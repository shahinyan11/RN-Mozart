import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    scrollView: {
        minHeight: win.height,
    },
    backgroundImage: {
        // position: 'absolute',
        resizeMode: 'cover',
        width: win.width,
    },

    header: {
        backgroundColor: 'rgba(230, 181, 159, 0.4)',
        minHeight: 98,
        paddingHorizontal: ratioWidth * 12,
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 10,
    },

    blur:{
        position: "absolute",
        height: 139,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: ratioWidth * 390
    },

    col_1 : {
        paddingHorizontal: ratioWidth * 12,
        // minHeight: 465,
        paddingTop: 16,
        paddingBottom: ratioWidth * 349,
        position: 'relative',
        alignItems: 'center',
        zIndex: 9999
    },
    text: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.6
    },
    textBold:{
        fontWeight: '500',
    },
    nameContainer: {
        borderTopWidth: 1,
        borderColor: 'white',
        marginTop: 8,
        paddingTop: 7,
        paddingBottom: 12,
        width: ratioWidth * 350
    },


    name: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: normalize(24),
    },

    squareContain:{
        bottom: -38
    },

    imgMozartContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imgMozart: {
        resizeMode: 'stretch',
        position: 'absolute',
        width: ratioWidth * 294,
        height: ratioWidth * 349,
        bottom: 0,
    },
    col_2: {
        paddingHorizontal: ratioWidth * 24,
        // minHeight: 198,
        paddingTop:  54,
        paddingBottom:  24,
        alignItems: 'center'
    },

    col_3: {
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: 24,
        paddingTop: 16,
        // minHeight: 407,
        alignItems: 'center',
    },
    signBox:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioWidth * 207,
        height: ratioWidth * 207,
        marginBottom: 16,
    },
    imageSing: {
        position: 'absolute',
        resizeMode: 'stretch',
        width: ratioWidth * 207,
        height: ratioWidth * 207,
    },
    imageFreimaurer:{
        position: 'absolute',
        resizeMode: 'stretch',
        width: ratioWidth * 122,
        height: ratioWidth * 144,
    },
    col_4: {
        paddingHorizontal: ratioWidth * 25,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingTop:  32,
        paddingBottom:  37,
        zIndex: 999,
        position: 'relative',
    },
    row: {
        flex:1,
        alignItems: 'center',
    },

    roeTextBold:{
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.6
    },

    iconLeft: {
        marginBottom: 26,
        resizeMode: 'stretch',
        width: ratioWidth * 77,
        height: ratioWidth * 63
    },
    centerBox:{
        width: ratioWidth * 26,
    },
    iconCenter:{
        position: 'absolute',
        resizeMode: 'stretch',
        width: ratioWidth * 26,
        height: 257,
        bottom: -67,
    },
    iconRight: {
        marginBottom: 22,
        resizeMode: 'stretch',
        width: ratioWidth * 64,
        height: ratioWidth * 67
    },
    col_5: {
        width: win.width,
        alignItems: 'center',
        paddingHorizontal: ratioWidth * 12,
        // minHeight: 236,
        paddingTop: 32,
        paddingBottom: 41
    },

    bottomText: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: normalize(28),
        lineHeight: normalize(28) * 1.14
    },
});

export {styles}
