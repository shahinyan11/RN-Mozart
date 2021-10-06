import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({
    container:{
      minHeight: win.height
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

    topCol: {
        paddingBottom:  12,
    },

    result:{
        color: colors.blue,
        fontSize:  17,
    },
    content: {
        paddingTop: 20,
        flex: 1
    },
    col: {
        flex: 0.4,
        justifyContent: 'center',
        marginBottom: ratioHeight * 20
    },
    textInput: {

        borderBottomWidth: 1,
        borderBottomColor: '#39abd7',
        fontSize: ratioHeight * 25
    },
    list:{
        alignItems: 'center',
        paddingTop: 20
    },
    teamBox:{
        width: ratioWidth * 382,
        height: 49,
        backgroundColor: '#ffffff',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 3
    },
    teamBoxContent: {
        width: ratioWidth * 390,
        height: 41,
        position: 'absolute',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: ratioWidth * 16,

    },
    iconBox: {
        flexDirection: "row"
    },
    image: {
        width: ratioWidth * 20,
        height: ratioWidth * 32,
        resizeMode: 'contain',
        marginLeft: ratioWidth * 16
    }
});

export {styles}
