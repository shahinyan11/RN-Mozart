import {StyleSheet} from 'react-native'
import {colors} from "../../../services/styles";
import {normalize} from "../../../services/helpers";

export function createStyles(backgroundColor) {
    return StyleSheet.create({
        container: {
            position: 'absolute',
            width: "100%"
        },
        modalContain: {
            backgroundColor: backgroundColor || colors.blue,
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: '100%'
        },

        text: {
            fontFamily: 'Montserrat-regular',
            fontSize: normalize(18),
            lineHeight: normalize(18) + 1.73,
            fontWeight: '500',
            color: '#FFF'
        },
    });
}

