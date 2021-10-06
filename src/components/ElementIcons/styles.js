import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;
const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2.5
    },

    icons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    square:{
        padding: 2,
        margin: 3
    },
    squareGrey:{
        padding: 2,
        margin: 3,
        backgroundColor: 'grey'
    },

    image:{
        width: win.width / deviceSizes.width * 80,
        height: win.width / deviceSizes.width * 80,
        resizeMode: 'stretch',
    },
    text: {
        fontFamily: 'CormorantGaramond-italic',
        color: "#39abd7",
        marginBottom: ratioHeight * 5,
        textAlign: 'center',
        fontSize: ratioHeight * 20,
        width: ratioWidth * 365,
    },
});

export {styles}
