import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioWidth} = data.deviceSizes;

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

    topCol: {
        minHeight: win.height - 495, // 495 is height of bottomCol,
        alignItems: 'center',
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: ratioWidth * 208,
        zIndex: 99999
    },

    membersScrollView:{
        flex:1
    },

    contentTitle: {
        fontFamily: 'CormorantGaramond-boldItalic',
        color: colors.blue,
        marginBottom: 6,
        marginTop: 30,
        textAlign: 'center',
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.3,
        width: ratioWidth * 365,
    },
    members:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioWidth * 315,
    },

    memberBox:{
        width: ratioWidth * 315,
        alignContent: 'stretch',
    },

    bottomCol: {
        alignItems: 'center',
        height:  495,
        paddingTop: 157,
        paddingHorizontal: 10,
    },
    titleBox:{
        marginBottom: 17,
        alignItems: 'center',
    },
    titleView:{
        borderBottomWidth: 1,
        borderBottomColor: '#e48146',
        borderTopWidth: 1,
        borderTopColor: '#e48146',
        justifyContent: 'center',
        paddingVertical: 5
    },
    bottomTitle: {
        fontFamily: 'CormorantGaramond-boldItalic',
        color: "#ffffff",
        fontSize: normalize(32),
        lineHeight: normalize(32) * 1.3,
    },

    tailTriangle:{
        height: 10,
        width: 1.5,
        backgroundColor: '#e48146',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderTopWidth: 9,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: '#e48146',
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.width,
    },
});

export {styles}
