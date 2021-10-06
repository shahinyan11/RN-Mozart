import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
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

    holesContain: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // alignContent: 'center',

    },
    hole: {
        width: win.width / deviceSizes.width * 120,
        height: win.width / deviceSizes.width * 120,
        marginHorizontal: win.width / deviceSizes.width * 10,
        marginVertical: -25,
        borderRadius: win.width / deviceSizes.width * 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // backgroundColor: 'red'
        overflow: 'hidden',
    },
    holeSingle: {
        width: win.width / deviceSizes.width * 120,
        height: win.width / deviceSizes.width * 120,
        borderRadius: win.width / deviceSizes.width * 100,
        marginHorizontal: win.width / deviceSizes.width * 100,
        marginVertical: -25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'


    },
    control: {
        flex: 1
    },
    imageHole: {
        width: win.width / deviceSizes.width * 100,
        height: win.width / deviceSizes.width * 80,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -10,
    },

    animView: {
        bottom: win.width / deviceSizes.width * -90,
        position: 'absolute',
        alignItems: 'center',
        width: win.width / deviceSizes.width * 100,
        height: win.width / deviceSizes.width * 100,
    },
    animViewToValue: {
        bottom: win.width / deviceSizes.width * 26,
    },
    touch: {
        alignItems: 'center',
        width: win.width / deviceSizes.width * 100,
        height: win.width / deviceSizes.width * 100,

    },
    image: {
        width: win.width / deviceSizes.width * 110,
        height: win.width / deviceSizes.width * 110,
        resizeMode: 'contain',
        position: 'absolute'
    },

    start: {
        height: win.width / deviceSizes.width * 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255, 0.5)'
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
