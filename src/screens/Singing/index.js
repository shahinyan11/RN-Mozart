import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, ImageBackground, Image, ScrollView, Platform} from 'react-native'
import {_getDeviceId} from "../../services/helpers";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import i18n from "../../services/i18next/index"
import {check} from "react-native-permissions";
import RNSoundLevel from "react-native-sound-level";
import NavigateButton from "../../components/NavigateButton";
import permissions from "../../services/permissions";
import Header from "../../components/Header";

class Singing extends Component {

    constructor(props) {
        super(props);

        this.interval = null;
        this._unsubscribeFocuse = null;
        this._unsubscribeBlur = null;
        this.sumVoiceLavels = 0
        this.countVoiceLavels = 0

        this.state = {
            modalVisible: false,
            element: {name: ''},
            rotate: -80,
            buttonShow: false
        };
    };

    componentDidMount() {
        this._unsubscribeFocuse = this.props.navigation.addListener('focus', () => {
            const {id, stage} = this.props.game;
            check(permissions.microphone).then((status) => {
                if (status === 'granted') {
                    RNSoundLevel.start();
                    RNSoundLevel.onNewFrame = (voiceData) => {
                        let voiceLevel = Platform.OS === 'android' ? voiceData.value / 2 * -1 : voiceData.value * -1
                        const rotate = this.calcRotate(voiceLevel);
                        this.setState({rotate});
                        this.sumVoiceLavels += voiceLevel
                        this.countVoiceLavels++
                    }

                    this.interval = setInterval(() => {
                        if (this.sumVoiceLavels / this.countVoiceLavels < 12) {
                            clearInterval(this.interval)
                            RNSoundLevel.stop();
                            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                                data: {
                                    id,
                                    stage: stage + 1,
                                    device_id: _getDeviceId(),
                                }
                            });

                            this.setState({
                                buttonShow: true
                            })
                        }
                        this.sumVoiceLavels = 0
                        this.countVoiceLavels = 0
                    }, 3000)
                }
            });
        });

        this._unsubscribeBlur = this.props.navigation.addListener('blur', () => {
            RNSoundLevel.stop()
        })
    }

    componentWillUnmount() {
        this._unsubscribeFocuse();
        this._unsubscribeBlur();
    }

    calcRotate = (value) => {
        const rotate = 80 - value;
        if (rotate < -80) {
            return -80
        } else if (rotate > 80) {
            return 80
        } else {
            return rotate
        }
    };

    render() {
        const {rotate, buttonShow} = this.state;
        return (
            <ScrollView style={styles.scrollView}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <View style={styles.titleContain}>

                            <Header
                                showBackIcon={true}
                                icon={require('../../assets/images/voice.png')}
                                text={i18n.t('screens.Singing.title')}
                                navigation={this.props.navigation}
                            />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <View style={styles.meter}>
                                <Image
                                    style={styles.voiceMeterIcon}
                                    source={require('../../assets/images/voiceMeter.png')}
                                />

                                <View style={[styles.animatedView, {transform: [{rotate: `${rotate}deg`}]}]}>
                                    <Image style={styles.slackIcon}
                                           source={require('../../assets/images/meterPointer.png')}/>
                                </View>

                            </View>
                        </View>
                        <View style={styles.col_3}>
                            {
                                buttonShow ?
                                    <View style={{backgroundColor: 'rgba(255,255,255, 0.2)'}}>
                                        <NavigateButton
                                            title={i18n.t('buttons.current_riddle')}
                                            onPress={() => {
                                                this.props.navigation.navigate('CurrentRiddle')
                                            }}
                                            color={'#39abd7'}
                                            // textColor={'#39abd7'}
                                            customStyles={{marginBottom: 0}}
                                        />
                                    </View>
                                    : null
                            }
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Singing)
