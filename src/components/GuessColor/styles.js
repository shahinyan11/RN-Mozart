import {StyleSheet} from 'react-native'
import data from "../../services/data";

const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    container: {
        borderColor: "#e48146",
        borderWidth: 1,
        width: ratioWidth * 122,
        height: ratioHeight * 96,
        marginBottom: ratioHeight * 15,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontFamily: 'BreeSerif-regular',
        color: "#000000",
        fontSize: ratioWidth * 14,
        textAlign: 'center',
    },

    square:{
        position: 'absolute',
        backgroundColor: "#e48146",
        width: ratioWidth * 4,
        height: ratioHeight * 4,
    },
    questionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ratioHeight *10,
    },
    colors: {
        height: ratioHeight * 20,
        width: ratioHeight * 20,
        marginHorizontal: ratioWidth * 4,
        marginVertical: ratioHeight * 5,
    },
    pickerView: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: ratioHeight * 10
    },

    picker: {
        marginLeft: ratioWidth *20,
        height: 40,
        width: ratioWidth * 100,
    },
    pickerItem: {
        backgroundColor: 'red'
    },
    hints: {
        fontFamily: 'CormorantGaramond-italic',
        color: "#39abd7",
        marginBottom: 5,
        fontSize: ratioHeight * 15,
        width: ratioWidth * 365,
        textAlign: 'center',
        marginVertical: 2,
    },

    question: {
        fontFamily: 'CormorantGaramond-italic',
        color: "#39abd7",
        marginBottom: 5,
        fontSize: ratioHeight * 18,
        marginRight: ratioWidth * 20
    },

});

export {styles}
