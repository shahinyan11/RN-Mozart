import {StyleSheet, Dimensions} from 'react-native'
import data from "../../../services/data";
import {normalize} from "../../../services/helpers";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    modalContain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    messageBox: {
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: deviceSizes.ratioWidth * 390,
        padding: 24
    },

    text: {
        flex: 0.9,
        textAlign: 'center',
        fontFamily: 'Montserrat-regular',
        fontSize: normalize(15),
        lineHeight: normalize(15) * 1.6,
    },

    image: {
        width: 95,
        height: 50,
        resizeMode: 'contain'
    },

    square:{
        position: 'absolute',
        backgroundColor: "#39abd7",
        width: 5,
        height: 5,
    },
});

export {styles}
