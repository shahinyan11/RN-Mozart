import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
    container: {
        marginTop: deviceSizes.ratioHeight * 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: win.width / deviceSizes.width * 390,
        height: deviceSizes.ratioHeight * 32,
    },

    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },

    progressBar: {
        backgroundColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    progress:{
        height: 17,
        backgroundColor: colors.orange,
    },
    percentText:{
        fontSize: 11,
        position: 'absolute',
        color: 'black',
        left: '48%'

    },
    smallProgress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigProgress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width / deviceSizes.width * 340,
    },
    flag: {
        resizeMode: 'stretch',
        position: 'absolute',
        right: -10,
        width: 18,
        height: 15
    },
    countDownContain: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightBox:{
        flexDirection: 'row',
        // backgroundColor: colors.orange,
        marginLeft: 20,
        height: '100%',
        alignItems: 'center',
    },

    countDown: {
        fontFamily: 'BreeSerif-regular',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: win.width / deviceSizes.width * 95,
        fontSize: win.width / deviceSizes.width * 17,
        color: 'white',
        height: '100%',
        marginRight: 8,
        backgroundColor: colors.orange,
    },
    settingsButton: {
        backgroundColor: colors.orange,
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 6
    }
});

export {styles}
