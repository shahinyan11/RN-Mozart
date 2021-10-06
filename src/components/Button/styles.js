import {StyleSheet} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const {ratioHeight, ratioWidth} = data.deviceSizes;

export function createStyles(width, height, color) {
    return StyleSheet.create({
        container: {
            width: width || 100,
            height: height || 40,
            backgroundColor: color || colors.blue,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10
        },
        content: {
            width: width ? width - 10 : 90,
            height: height ? height - 3 : 37,
            backgroundColor: '#FFF',
        },
        textBox: {
            width: width ? width - 3 : 97,
            height: height ? height - 10 : 30,
            position: 'absolute',
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: 'BreeSerif-regular',
            fontSize: normalize(20),
            lineHeight: normalize(20) * 1.2,
            letterSpacing: 2.5,
            textTransform: 'uppercase',
            textAlign: 'center',
        },

    });

}
