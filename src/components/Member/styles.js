import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: "#39abd7",
        marginHorizontal: 2.5,
        height:  win.height / deviceSizes.height * 50,
        marginVertical: win.height / deviceSizes.height * 3,
        paddingHorizontal: win.width / deviceSizes.width * 15,
        paddingVertical: win.width / deviceSizes.width * 3,
        flexDirection: 'row',
        alignItems: 'center'
    },


    square:{
        position: 'absolute',
        width: 4,
        height: 4,
        backgroundColor:  "#ffffff"
    },

    text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'BreeSerif-regular',
        textTransform: 'uppercase',
        color: "#ffffff",
        fontSize: normalize(20),
        lineHeight: normalize(20) * 1.2,
        letterSpacing: 2.5
    },
    image:{
        width: win.width / deviceSizes.width * 20,
        height: win.width / deviceSizes.width * 32,
        resizeMode: 'contain',
        marginRight: 5
    }
});

export {styles}
