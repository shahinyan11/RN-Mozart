import {StyleSheet} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";

const {ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ratioWidth * 20
    },
    sign: {
        width: 181,
        height: 181,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginVertical: 10
    },
    callBox:{
        flex:1,
        marginLeft: 25,
        alignItems: 'center'
    },
    callImage: {
        width: 73,
        height: 73,
        marginBottom: 5,
        resizeMode: 'stretch',
    },
    text:{
        textAlign: 'center',
        fontSize: 10,
        color: colors.blue
    },
    segment_0: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',

    },
    segment_1: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
        transform: [{ rotate: '90deg'}]
    },
    segment_2: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
        transform: [{ rotate: '-90deg'}]
    },
    segment_3: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
        transform: [{ rotate: '180deg'}]
    }


});

export {styles}
