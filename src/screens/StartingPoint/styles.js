import {Dimensions, StyleSheet} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles"
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({

    backgroundImage: {
        flex: win.height,
        resizeMode: 'contain',
        zIndex: 100,
    },

    topCol: {
        // minHeight: win.height - 314,
        paddingTop: 10,
        position: 'relative',
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: ratioWidth * 367,
        alignItems: 'center',
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: ratioWidth * 390,
        paddingTop: 32,
    },
    touchBack:{
        zIndex: 999999,
        position:'absolute',
        left: 0,
        top: ratioHeight * 43.5,
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: ratioHeight * 48,
    },
    description:{
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        width: ratioWidth * 366,
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.6,
        marginBottom:  12
    },
    squareContent:{
        paddingTop: ratioHeight * 38,
        alignItems: 'center',
        flex: 1
    },
    textContent: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingHorizontal: 5,
    },
    text: {
        fontFamily: 'CormorantGaramond-boldItalic',
        textAlign: 'center',
        color: colors.blue,
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.5,
        width: ratioWidth * 365,
    },


    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    // bottomCol: {
    //     alignItems: 'center',
    //     minHeight: 314,
    //     paddingTop: 40,
    //     paddingBottom:  30
    // },
    bottomCol: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: 'white',
    },
    inputBox: {
        width: ratioWidth * 390,
        marginVertical: ratioHeight * 10,
        flexDirection:'row',
        alignItems: "center",
    },

    input: {
        paddingVertical: 2,
        marginLeft: 10,
        height: 30,
        width: ratioWidth * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black'
    },
});

export {styles}
