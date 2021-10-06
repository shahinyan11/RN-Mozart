import React, {Component} from 'react'
import {connect} from "react-redux"
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {_getDeviceId} from "../../services/helpers";
import NavigateButton from "../../components/NavigateButton";
import {makeAction} from "../../makeAction"
import {errorAlert} from "../../services/helpers";
import {styles} from './styles'
import {
    JOIN_TO_GAME_REQUEST,
    RIDDLE_SOLVED_REQUEST, SET_GAME_MODE_REQUEST,
    SHOW_MESSAGE_POPUP,
    SHOW_QUESTION_POPUP,
} from "../../actionsTypes";
import i18n from "../../services/i18next"
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import Header from "../../components/Header";
import {getSystemName,getBrand,getSystemVersion} from "react-native-device-info";
import RefreshView from "../../components/RefreshView";

class StartGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            voucher: ''
        }

    }

    nameChange = (name) => {
        this.setState({name})
    };
    voucherChange = (voucher) => {
        this.setState({voucher})
    };

    validateName = (name) => {

    };
    validateVoucher = (name) => {

    };

    handlePress = () => {
        const {name, voucher} = this.state;
        if (name !== '' && voucher !== '') {
            this.props.makeAction(
                JOIN_TO_GAME_REQUEST,
                {
                    data: {
                        name,
                        voucher,
                        device_id: _getDeviceId(),
                        brand: getBrand(),
                        system_name: getSystemName(),
                        system_version: getSystemVersion(),
                    }
                },
                this.callBack
            );
        } else {
            errorAlert('Error', 'Nicht alle Felder sind ausgefüllt')
        }
    };
    callBack = (id) => {
        this.props.navigation.navigate('MainMenu', {firstTime: true});
    };

    render() {
        return (
            <RefreshView>
                <View style={{flex: 1}}>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        <View style={styles.topCol}>
                            <Header
                                showBackIcon={true}
                                text={i18n.t('screens.StartGame.mainTitle')}
                                navigation={this.props.navigation}
                            />
                            <Text style={styles.title}>
                                {i18n.t('screens.StartGame.title')}
                            </Text>

                            <WhiteSquareBackground>
                                <View style={styles.squareContent}>
                                    <Text style={styles.contentTitle}>
                                        {i18n.t('screens.StartGame.contentTitle')}
                                    </Text>
                                    <Text style={styles.centerText}>
                                        {i18n.t('screens.StartGame.centerText')}
                                    </Text>
                                </View>
                            </WhiteSquareBackground>

                        </View>
                        <LinearGradient
                            style={styles.centerCol}
                            colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                            useAngle={true}
                            angle={315}
                        >
                            <Text style={styles.checkTitle}>
                                {i18n.t('screens.StartGame.checkTitle')}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.dot}> . </Text>
                                <Text style={styles.checkListText}>
                                    {i18n.t('screens.StartGame.text_1')}
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.dot}> . </Text>
                                <Text style={styles.checkListText}>
                                    {i18n.t('screens.StartGame.text_2')}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.dot}> . </Text>
                                <Text style={styles.checkListText}>
                                    {i18n.t('screens.StartGame.text_3')}
                                </Text>
                            </View>
                        </LinearGradient>
                        <View style={styles.bottomCol}>
                            <View>
                                <Text style={styles.text}>
                                    {i18n.t('screens.StartGame.text_4')}
                                </Text>
                                <View style={styles.inputBox}>
                                    <Text style={styles.text}>
                                        {i18n.t('inputs.labels.player_name')}
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        onEndEditing={(e) => {
                                            this.validateName(e.nativeEvent.text)
                                        }}
                                        onChangeText={(text) => {
                                            this.nameChange(text)
                                        }}

                                    />
                                </View>
                                <View style={styles.inputBox}>
                                    <Text style={styles.text}>
                                        {i18n.t('inputs.labels.activation_code')}
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        onEndEditing={(e) => {
                                            this.validateVoucher(e.nativeEvent.text)
                                        }}
                                        onChangeText={(text) => {
                                            this.voucherChange(text)
                                        }}
                                    />
                                </View>
                            </View>

                            <NavigateButton
                                title={i18n.t('buttons.start_new_game')}
                                onPress={this.handlePress}
                            />
                            <NavigateButton
                                title={i18n.t('buttons.join_running_game')}
                                onPress={this.handlePress}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </RefreshView>


        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    errorMessage: state.errorsReducer.errorMessage,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartGame);
