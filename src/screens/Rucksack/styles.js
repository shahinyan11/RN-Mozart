import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    backgroundImage: {
        // flex: 1,
        minHeight: win.height,
        resizeMode: 'stretch',
        alignItems: 'center',
        position: 'relative'

    },

    topCol: {
        paddingBottom: 12,
    },

    pageIcon: {
        width: ratioWidth * 37,
        height: ratioHeight * 33,
        marginRight: ratioWidth * 10,
    },

    iconContain: {
        alignItems: 'center',
        width: ratioWidth * 180
    },

    scrollView: {
        flex: 1,
        paddingHorizontal: ratioWidth * 12,
        width: '100%',
    },

    elements: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
    },
    item: {
        width: ratioWidth * 180,
        height: ratioWidth * 180,
        resizeMode: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    greenBorder: {
        borderWidth: 5,
        borderColor: "rgba(25, 128, 25, 0.5)",
    },
    darkBorder: {
        borderWidth: 6,
        borderColor: "rgba(36, 25, 32, 0.75)",
    },

    text: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },

    bottomText: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: ratioHeight * 28
    },
});

export {styles}
