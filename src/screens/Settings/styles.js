import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes

const styles = StyleSheet.create({
    container: {
        minHeight: win.height,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

    topCol: {
        paddingHorizontal: ratioWidth * 12,
        alignItems: 'center',
        flex: 1
    },
    text: {
        color: "white",
        fontSize: ratioHeight * 17
    },

    content: {
        paddingTop: 20,
        flex: 1
    },
    inputBox: {
        marginBottom: ratioHeight * 20
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#39abd7',
        fontSize: ratioHeight * 25
    },
    pickerBox: {
        width: ratioWidth * 390,
        height: ratioHeight * 49,
        paddingLeft: ratioWidth * 20,
        marginBottom: ratioHeight * 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: "#39abd7",
        flexDirection: 'row',
    },
    square: {
        position: 'absolute',
        width: 4,
        height: 4,
        backgroundColor: "#39abd7"
    },

    arrowDown: {
        zIndex: -1,
        width: ratioWidth * 37,
        height: ratioHeight * 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: "#39abd7",
        margin: 0
    },
});

const pickerStyle = StyleSheet.create({
    inputAndroid:{
        width: "100%",
        height: ratioHeight * 49,
        fontSize: ratioHeight * 20,
        paddingRight: ratioWidth * 37,
        color: "#ffffff",
        paddingLeft: ratioWidth * 50
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: ratioHeight * 49,
        width: ratioWidth * 37,
        borderLeftWidth: 1,
        borderLeftColor: "#39abd7",
    },
})


export {styles, pickerStyle}
