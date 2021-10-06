import {StyleSheet} from 'react-native'
import data from "../../services/data";

const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    input: {
        paddingVertical: 2,
        height: 30,
        width: ratioWidth * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black'
    },
    errorMessage: {
        color: 'red',
    },

});
export {styles}
