import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        borderColor: colors.orange,
        borderWidth: 1,
        width: ratioWidth * 122,
        height: ratioWidth * 96,
        marginBottom: ratioHeight * 15,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    markedContainer: {
        backgroundColor: colors.orange,
        width: ratioWidth * 122,
        height: ratioWidth * 96,
        marginBottom: ratioHeight * 15,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    icon: {
        width: ratioWidth * 43,
        height: ratioHeight * 44
    },
    text: {
        fontFamily: 'BreeSerif-regular',
        textTransform: 'uppercase',
        color: "#000000",
        textAlign: 'center',
        fontSize: normalize(14),
        lineHeight: normalize(14) * 1.4,
        letterSpacing: 1.75
    },

    square: {
        position: 'absolute',
        backgroundColor: colors.orange,
        width: 4,
        height: 4,
    },


});

export {styles}
