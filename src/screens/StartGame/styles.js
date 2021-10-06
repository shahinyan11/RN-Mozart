import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {ratioWidth, ratioHeight} = data.deviceSizes;

const styles = StyleSheet.create({
    scrollView: {
        // minHeight: win.height,
        flex:1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

    topCol: {
        position: 'relative',
        paddingHorizontal: ratioWidth * 12,
        paddingBottom: ratioWidth * 367,
        alignItems: 'center',
        zIndex: 9999

    },

    centerCol: {
        paddingHorizontal: ratioWidth * 20,
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10,
    },

    bottomCol: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,
        alignItems: 'center',
    },
    description: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: ratioWidth * 14,
        paddingHorizontal: ratioWidth * 12
    },
    descriptionOriented: {
        fontFamily: 'Montserrat-regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: ratioWidth * 14,
        paddingHorizontal: ratioWidth * 12
    },
    checkListText: {
        color: 'white',
        flex: 1
    },

    text: {
        color: 'white',
    },
    dot: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:ratioWidth * 390,
    },

    title: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 30,
        marginVertical: 10
    },

    contentTitle: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: ratioWidth * 30,
        marginBottom: 10
    },

    centerText: {
        fontFamily: 'CormorantGaramond-italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: ratioWidth * 20,
        width: ratioWidth * 365,
        marginBottom: 16
    },

    squareBackground: {
        resizeMode: 'contain',
        width: ratioWidth * 390,
        height: ratioWidth * 385,
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
    },

    squareContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

    checkTitle: {
        color: 'white',
        fontSize: ratioWidth * 16,
        marginBottom: 5
    },
    checkTitleOriented: {
        color: 'white',
        fontSize: ratioWidth * 16,
        marginBottom: 5
    },

    inputBox: {
        flexDirection:'row',
        marginBottom: 15,
        alignItems: "center",
        justifyContent: 'space-between'
    },

    input: {
        paddingVertical: 2,
        marginLeft: 10,
        height: 30,
        width: ratioWidth * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black'
    },
    inputOriented: {
        paddingVertical: 2,
        marginLeft: 10,
        height: 30,
        width: ratioWidth * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white'
    }
});

export {styles}
