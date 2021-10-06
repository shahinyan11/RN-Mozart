import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({

    container: {
        width: win.width,
        position: 'absolute',
        bottom: 0,
    },

    header: {
        height: 48,
        width: win.width,
        alignItems: 'center',
        paddingTop: 12,
    },

    content: {
        width: win.width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 31
    },
    text: {
        fontFamily: 'BreeSerif-regular',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 20,
        letterSpacing: 2.5
    },

});

export {styles}
