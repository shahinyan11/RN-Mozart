import {StyleSheet} from 'react-native'
import data from "../../../services/data";
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
        height: ratioWidth * 390,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
    },

    squareBackground: {
        position: "absolute",
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },


    icon: {
        width: ratioWidth * 250,
        height: ratioWidth * 150,
        resizeMode: 'contain',
        marginTop: 22,
        marginBottom: 10
    },
    textBox: {
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: ratioWidth * 15,
        minHeight: ratioWidth * 150,
    },
    text: {
        color: '#241920',
        textAlign: 'center',
        // width: '100%',
        fontSize: normalize(16),
        lineHeight: normalize(16) * 1.5,
        fontFamily: 'CormorantGaramond-boldItalic',
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
        marginBottom: 10
    },
    image: {
        width: 95,
        height: 50,
        resizeMode: 'contain'
    },

    indicator:{
        backgroundColor: 'black',
        width: 5
    }


});

export {styles}
