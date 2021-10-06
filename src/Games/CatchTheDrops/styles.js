import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const draggableSize = win.width / deviceSizes.width * 150;

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10000
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 0
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
    title: {
        alignItems: 'center',
        marginTop: win.width / deviceSizes.width * 60,
        marginBottom: win.width / deviceSizes.width * 60,
    },
    titleImage: {
        height: win.width / deviceSizes.width * 150,
        width: win.width / deviceSizes.width * 350,
        resizeMode: 'contain'
    },
    animView: {
        width: win.width / deviceSizes.width * 35,
        height: win.width / deviceSizes.width * 35,
        position: 'absolute',
        alignItems: 'center',
    },
    dropsContainer: {
        width: win.width,
        height: win.head,
        position: 'absolute',
        zIndex: 999999,
        top: 0,
        left: 0
    },
    imageDrop: {
        position: 'absolute',
        width: win.width / deviceSizes.width * 35,
        height: win.width / deviceSizes.width * 35,
        resizeMode: 'contain',
    },


    cupContainer: {
        width: win.width / deviceSizes.width * 150,
        height: win.width / deviceSizes.width * 150,
        position: 'absolute',
        bottom: 0,
        // alignItems: 'center',
    },
    cupPosition: {
        position: 'absolute',
        width: win.width / deviceSizes.width * 110,
        height: win.width / deviceSizes.width * 10,
        top: win.width / deviceSizes.width * 30,
        // the value 40 is a difference cumContainer.width - copPosition.width
        left: win.width / deviceSizes.width * 40  / 2,
        zIndex: 1000000,
    },
    image: {
        position:"absolute",
        top:0,
        left:0,
        width: win.width / deviceSizes.width * 150,
        height: win.width / deviceSizes.width * 150,
        opacity: 0
    },

    start: {
        color: 'white',
        fontSize: win.width / deviceSizes.width * 72,
        height: win.width / deviceSizes.width * 100,
        marginBottom: 15,
        textShadowColor: '#444444',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        // fontFamily: '04b_19'
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
    restart:{
        width: win.width / deviceSizes.width * 300,
        height: win.width / deviceSizes.width * 150,
        resizeMode: 'contain',
    }


});

export {styles}
