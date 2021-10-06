import {StyleSheet} from 'react-native'
import {backgroundColors} from '../../assets/styles'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000000,
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1
    }
});

export {styles}