import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    },
    scoreBox: {
        position: 'absolute',
        right: 10,
        flexDirection: "row"
    },
    score: {
        color: 'white',
        fontSize: win.width / deviceSizes.width * 25,
        height: win.width / deviceSizes.width * 35,
        textShadowColor: '#444444',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        // fontFamily: '04b_19'
    },

    firesContain: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent:'space-around',
        flexWrap: 'wrap',
        paddingBottom :  win.width / deviceSizes.width * 200,
        paddingRight: win.width / deviceSizes.width * 45,
        paddingTop :  win.width / deviceSizes.width * 35,
        // alignContent: 'center',

    },

    fireBoxes:{
        width: win.width / deviceSizes.width * 45,
        height: win.width / deviceSizes.width * 60,
        position: 'relative',

    },

    imageFire: {
        width: win.width / deviceSizes.width * 90,
        height: win.width / deviceSizes.width * 120,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        top: 0,
        // backgroundColor: 'red'
    },
    emptyText: {
        width: win.width / deviceSizes.width * 90,
        height: win.width / deviceSizes.width * 120,
    },
    imageBucket: {
        width: win.width / deviceSizes.width * 90,
        height: win.width / deviceSizes.width * 120,
        zIndex: 10000000,
        resizeMode: 'contain',
    },
    imageDock: {
        width: win.width,
        height: win.width / deviceSizes.width * 120,
        resizeMode: 'cover',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'relative'
    },
    imageShadow: {
        width: win.width / deviceSizes.width * 90,
        resizeMode: 'contain',
    },

    gameOver: {
        flex: 1,
        position: 'absolute',
        zIndex: 99999999,
        width: '100%',
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(150,150,150, 0.6)'
    },
    text: {
        color: 'white',
        fontSize: win.width / deviceSizes.width * 45,
        // height: win.width / deviceSizes.width * 50,
        textShadowColor: '#444444',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        // fontFamily: '04b_19'
    },
    restart: {
        width: win.width / deviceSizes.width * 300,
        height: win.width / deviceSizes.width * 150,
        resizeMode: 'contain',
    }

});

export {styles}
