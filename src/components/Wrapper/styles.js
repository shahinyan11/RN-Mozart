import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 999999,
        backgroundColor:  'rgba(36, 25, 32, 0.75)',
        justifyContent:'center',
        alignItems: 'center',
        width: win.width ,
        height: win.height,
        paddingHorizontal: 15
    },
    refreshContain:{
        position: 'absolute',
        zIndex: 1000000000,
        top: 0,
        alignSelf: 'center',
        width: win.width / deviceSizes.width * 390 - 50,
        minHeight: 40,
    },
    image:{
        width: win.width / deviceSizes.width * 380,
        height: win.width / deviceSizes.width * 380
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    text: {
      color: 'white',
      fontSize: win.width / deviceSizes.width * 35
    },
    qrText:{
        fontFamily: 'CormorantGaramond-regular',
        color: 'white',
        fontSize: 45,
        marginBottom: 10
    },
    qrImage:{
        width: win.width - 30,
        height:  win.width - 30
    }
});


export {styles}
