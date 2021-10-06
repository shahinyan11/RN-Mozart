import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import {normalize} from "../../services/helpers";

const win = Dimensions.get('window');
const {ratioHeight, ratioWidth} = data.deviceSizes;

export function createStyles (color){
    return StyleSheet.create({
        teamBoxContent: {
            width: ratioWidth * 390,
            height: 41,
            position: 'absolute',
            backgroundColor: color || '#ffffff',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-between',
            paddingHorizontal: ratioWidth * 16,

        },
        iconBox: {
            flexDirection: "row"
        },
        text: {
            fontFamily: 'BreeSerif-regular',
            color: color ? "#FFF" : colors.blue,
            fontSize:  normalize(20),
            lineHeight:  normalize(20) * 1.2,
            letterSpacing: 2.5,
            fontWeight: '500',
            textAlign: 'center',
            textTransform: 'uppercase'
        },
        time: {
            fontFamily: 'Montserrat-regular',
            fontSize:  normalize(15),
            lineHeight:  normalize(15) * 1.6,
            textAlign: 'center',
            color: colors.blue,
        },
        image: {
            width: ratioWidth * 20,
            height: ratioWidth * 32,
            resizeMode: 'contain',
            marginLeft: ratioWidth * 16
        }
    });

}
