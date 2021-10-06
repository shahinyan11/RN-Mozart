import {StyleSheet} from 'react-native'
import data from "../../services/data";
import {normalize} from "../../services/helpers";

const {ratioWidth, ratioHeight} = data.deviceSizes;

export function createStyles (width, height, color){
    const styles = StyleSheet.create({
        content: {
            width: ratioWidth * width,
            height: ratioHeight * height,
            paddingLeft: ratioWidth * ( width * 5.13 / 100 ),
            marginBottom: ratioHeight * ( height * 40 / 100 ),
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: "#39abd7",
            flexDirection: 'row',
        },

        label: {
            color: "white",
            fontSize: ratioHeight * ( height * 32 / 100 )
        },
        square: {
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: "#39abd7"
        },
    });
    const pickerStyle = StyleSheet.create({
        inputAndroid:{
            width: "100%",
            height: ratioHeight * height,
            fontSize: normalize( height * 32 / 100 ),
            paddingRight: ratioWidth * 37,
            color: color,
            paddingLeft: ratioWidth * ( width * 12.8/ 100 ),
        },
        inputIOS:{
            width: "100%",
            height: ratioHeight * height,
            fontSize: normalize( height * 32 / 100 ),
            paddingRight: ratioWidth * 37,
            color: color,
            paddingLeft: ratioWidth * ( width * 12.8/ 100 ),
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: ratioHeight * height,
            width: ratioWidth * 37,
            borderLeftWidth: 1,
            borderLeftColor: "#39abd7",
        },

    });

    return {
        styles,
        pickerStyle
    }
}



