import {StyleSheet} from 'react-native'
import data from "../../services/data";

const {ratioWidth,ratioHeight} = data.deviceSizes;

export function createStyles (height){
    return StyleSheet.create({
        contain: {
            zIndex: 9999999,
            position: 'absolute',
            alignItems: 'center',
            bottom: ratioHeight * -20,
            width: ratioWidth * 390,
            height: ratioWidth * height,
        },

        imageBackground: {
            position: "absolute",
            resizeMode: 'stretch',
            width: "100%",
            height: "100%",
        },

    });
}


