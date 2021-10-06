import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        borderColor: "#e48146",
        borderWidth: 1,
        width: ratioWidth * 390,
        maxWidth: '100%',
        height:  ratioHeight * 49,
        marginBottom: ratioHeight * 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'BreeSerif-regular',
        color: "#ffffff",
        textTransform: 'uppercase',
        fontSize: normalize(20),
        lineHeight: normalize(20) * 1.2,
        letterSpacing: 2.5,
        textAlign: 'center'
    },

    square:{
        position: 'absolute',
        backgroundColor: colors.orange,
        width: 4,
        height: 4,
    }

});

export {styles}
