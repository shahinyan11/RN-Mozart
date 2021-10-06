import {StyleSheet} from 'react-native'
import data from "../../services/data";

const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: "#39abd7",
        paddingHorizontal: ratioWidth * 15,
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    video: {
        position: 'absolute',
        width: ratioWidth * 393,
        height: ratioHeight * 702,
    }
});

export {styles}
