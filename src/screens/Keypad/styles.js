import {Dimensions, StyleSheet} from 'react-native';
import data from "../../services/data";
import {normalize} from "../../services/helpers";

const {ratioWidth, ratioHeight} = data.deviceSizes;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    topContainer: {
        paddingTop: ratioHeight * 40,
        height: ratioHeight * 230,
        marginHorizontal: ratioWidth * 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    keypadContainer: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    call: {
        marginVertical: 60,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },
    mozartImage: {
        height: ratioWidth * 300,
        resizeMode: 'contain'
    },

    keypadRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: ratioWidth * 115,
        height: ratioWidth * 90,
        margin: 4,
        backgroundColor: 'rgba(255, 252, 250, 0.25)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNumber: {
        fontSize: ratioWidth * 35,
        color: 'black'
    },
    numberDesc: {
        fontSize: ratioWidth * 13,
        fontWeight: '600',
        color: 'gray'

    },
    number: {
        textAlign: 'center',
        fontSize: ratioWidth * 38,
        fontWeight: '300',
        color: 'black'
    },
    numberMedium: {
        fontSize: ratioWidth * 32,
    },
    numberSmall: {
        fontSize: ratioWidth * 28,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: ratioWidth * 73,
        height: ratioWidth * 73,
        marginHorizontal: ratioWidth * 14,
        marginVertical: ratioHeight * 8,
    },
    goBack: {
        zIndex: 10,
        fontSize: normalize(20)
    },
    backText: {
        fontSize: normalize(25),
        color: '#615f5d',
        marginLeft: 10
    },
    removeButton: {
        zIndex: 10,
    },
    remove: {
        width: ratioWidth * 32,
        height: ratioWidth * 32,
    },
    callLoaderContainer: {
        width: ratioWidth * 73,
        height: ratioWidth * 73,
        marginVertical: ratioHeight * 8,
        // backgroundColor: Colors.appColor1,
        borderRadius: ratioWidth * 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
