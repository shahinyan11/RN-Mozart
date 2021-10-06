import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        minHeight: win.height,
        backgroundColor: 'rgba(57, 171, 215, 1)'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        zIndex: 100,
    },

    topCol: {
        flex: 1,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(57, 171, 215, 0.5)',
        paddingHorizontal: win.width / deviceSizes.width * 12,
    },


    description: {
        fontFamily: 'Montserrat-regular',
        color: "#ffffff",
        marginTop: 10,
        fontSize: win.width / deviceSizes.width * 14,
        paddingHorizontal: win.width / deviceSizes.width * 12
    },

    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390,
        marginTop: 10
    },


    mainTitle: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 40,
        marginLeft: win.width / deviceSizes.width * 20,
        marginBottom: 5,
    },

    bottomText: {
        fontFamily: 'Montserrat-regular',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 14,
        paddingHorizontal: win.width / deviceSizes.width * 15
    },
    bottomCol: {
        paddingTop: 20,
        alignItems: 'center',
    },
    bottomMenu: {
        paddingTop: 30,
        paddingBottom: 40,
        alignItems: 'center',
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.width,
    },

    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: 'black',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    // centerText: {
    //     fontFamily: 'CormorantGaramond-italic',
    //     textAlign: 'center',
    //     color: "#39abd7",
    //     fontSize: win.width / deviceSizes.width * 32,
    //     width: win.width / deviceSizes.width * 365,
    //     marginBottom: 16
    // },
    // centerTextOriented: {
    //     fontFamily: 'CormorantGaramond-italic',
    //     textAlign: 'center',
    //     color: "#39abd7",
    //     fontSize: win.height / deviceSizes.width * 32,
    //     width: win.height / deviceSizes.width * 365,
    //     marginBottom: 16
    // },

    // squareContain: {
    //     zIndex: 100,
    //     alignItems: 'center',
    //     width: win.width / deviceSizes.width * 390,
    //     height: win.width / deviceSizes.width * 390,
    // },
    // squareContainOriented: {
    //     zIndex: 100,
    //     alignItems: 'center',
    //     width: win.height / deviceSizes.width * 390,
    //     height: win.height / deviceSizes.width * 390,
    // },

    // squareBackground: {
    //     resizeMode: 'contain',
    //     width: win.width / deviceSizes.width * 390,
    //     height: win.width / deviceSizes.width * 385,
    //     marginTop: 25,
    //     paddingTop: 15,
    //     flexDirection: 'row',
    //     // opacity: 0.2
    // },
    // squareBackgroundOriented: {
    //     resizeMode: 'contain',
    //     width: win.height / deviceSizes.width * 390,
    //     height: win.height / deviceSizes.width * 385,
    //     marginTop: 25,
    //     paddingTop: 15,
    //     flexDirection: 'row',
    //     // opacity: 0.2
    // },
    // squareContent:{
    //     marginTop: 38,
    //     alignItems: 'center',
    //     flex: 1
    // },
    // buttonText: {
    //     fontSize: 18,
    //     fontFamily: 'Gill Sans',
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#ffffff',
    //     backgroundColor: 'transparent',
    // },

});

export {styles}
