import {StyleSheet,} from 'react-native';
import {colors} from '../../services/styles';
import {normalize} from "../../services/helpers";

export function createStyles(isPortrait) {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        viewShot: {
            flex: 1,
            backgroundColor: 'white',
            flexDirection: isPortrait ? 'column' : 'row'
        },
        top: {
            height: isPortrait ? 120 : null,
            width: !isPortrait ? 120 : null,
            flexDirection: isPortrait ? 'column' : 'row',
            paddingHorizontal: isPortrait ? 12 : null,
            paddingVertical: !isPortrait ? 12 : null,
        },
        topContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },
        logoBox: {
            backgroundColor: 'white',
            alignItems: 'center'
        },
        siteLinkPrt: {
            marginTop: 10,
            color: colors.blue
        },
        siteLink: {
            marginTop: 10,
            color: colors.blue,
            fontSize: normalize(9)
        },
        topDecor: {
            width:  isPortrait ? '100%' : 10,
            height: isPortrait ? 10 : '100%',
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: colors.blue,
            borderBottomWidth: isPortrait ? 0 : null,
            borderRightWidth: !isPortrait ? 0 : null,
        },
        center: {
            flex: 1,
            width: '100%',
            flexDirection: isPortrait ? 'row' : 'column',
            paddingHorizontal: isPortrait ? 12 : null,
            paddingVertical: !isPortrait ? 12 : null,
        },
        square: {
            position: 'absolute',
            backgroundColor: 'white',
            width: 15,
            height: 15,
        },
        square_1: {
            top: 0,
            left: 0
        },
        square_2: {
            top: 0,
            right: 0
        },
        square_3: {
            bottom: 0,
            right: 0
        },
        square_4: {
            bottom: 0,
            left: 0
        },
        centerLeftDecor: {
            backgroundColor: 'white',
            width:  isPortrait ? 10 : '100%',
            height: isPortrait ? '100%' : 10,
            borderLeftWidth: isPortrait ? 2 : null,
            borderTopWidth: !isPortrait ? 2 : null,
            borderColor: colors.blue,
            // borderTopWidth: 0
        },
        centerRightDecor: {
            width:  isPortrait ? 10 : '100%',
            height: isPortrait ? '100%' : 10,
            backgroundColor: 'white',
            borderRightWidth: isPortrait ? 2 : null,
            borderBottomWidth: !isPortrait ? 2 : null,
            borderColor: colors.blue,
            // borderTopWidth: 0
        },

        bottom: {
            height: isPortrait ? 80 : null,
            width: !isPortrait ? 80 : null,
            paddingHorizontal: isPortrait ? 12 : null,
            paddingVertical: !isPortrait ? 12 : null,
            alignItems: isPortrait ? 'center' : null,
            backgroundColor: 'white',
        },
        bottomDecor: {
            width:  isPortrait ? '100%' : 10,
            height: isPortrait ? 10 : '100%',
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: colors.blue,
            borderTopWidth: isPortrait ? 0 : null,
            borderLeftWidth: !isPortrait ? 0 : null,
        },
        capture: {
            marginTop: 15,
            zIndex: 999999999999
        },
        button: {
            backgroundColor: colors.blue,
            padding: 10,
            marginHorizontal: 5
        },
        text: {
            fontSize: 14,
            color: '#fff'
        },
        actionsBox: {
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
        },
    });
}
