import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import Constants from "./Constants";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: win.width,
        height: win.height
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    gameOverText: {
        color: 'white',
        fontSize: 48,
        // fontFamily: '04b_19'
    },
    gameOverSubText: {
        color: 'white',
        fontSize: 24,
        // fontFamily: '04b_19'
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    score: {
        position: 'absolute',
        color: 'white',
        fontSize: 72,
        top: 50,
        left: Constants.MAX_WIDTH / 2 - 20,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 2,
        // fontFamily: '04b_19'
    },
    fullScreenButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    headImage:{
        position: "absolute",
        left: 0,
        top: win.height - 450,
        width: win.width / deviceSizes.width * 300,
        height: win.width / deviceSizes.width * 300,
    },
    button:{
        width: 350,
        height: 100,
    },

    number:{
        width: 150,
        height: 350,
        bottom: 200
    }
});

export {styles}
