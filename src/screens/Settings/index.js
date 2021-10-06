import React, {Component} from 'react'
import {connect} from "react-redux";
import {Text, View, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    CHANGE_LANGUAGE,
    REMOVE_USER_JOINS_REQUEST,
    RIDDLE_SOLVED_REQUEST,
    PAUSE_GAME_REQUEST,
    CONTINUE_GAME_REQUEST, SHOW_QUESTION_POPUP, CORRECT_ELEMENT_REQUEST
} from "../../actionsTypes";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import i18n from "../../services/i18next"
import {_getDeviceId} from "../../services/helpers";
import Header from "../../components/Header";
import SelectInput from "../../components/SelectInput";
import {generateGuessColor, getCurrentMemberType} from "../../services/helpers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RefreshView from "../../components/RefreshView";
import NavigateButton from '../../components/NavigateButton';
import {colors} from "../../services/styles";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.languageItems = [
            {key: 'en', label: i18n.t('words.english'), value: 'en', color: 'white'},
            {key: 'ge', label: i18n.t('words.german'), value: 'ge', color: 'white'},
        ];

        const currentUser = props.game?.game_members?.find(value => value.device_id === _getDeviceId());

        this.state = {
            name: currentUser?.name || ''
        }
    }

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    changeLanguage = (language) => {
        i18n.changeLanguage(language);
        this.props.makeAction(CHANGE_LANGUAGE, {data: {language}});
    };

    checkIfFirstSkip = async () => {
        const {id, game_mode} = this.props.game;
        const res = await AsyncStorage.getItem(`skip_${id}`)

        if (res) {
            this.skipRiddle()
        } else {
            const gameModeSkip = game_mode === 'timed' ? 'firstSkip' : 'untimedFirstSkip'
            this.props.makeAction(SHOW_QUESTION_POPUP, {
                text: i18n.t(`modals.${gameModeSkip}`),
                callback: this.skipRiddle
            });
        }

    };

    skipRiddle = () => {
        const {id, stage, game_members} = this.props.game;
        const memberType = getCurrentMemberType(game_members, _getDeviceId());
        console.log(id, stage, game_members, 77777777777)
        const data = {
            id,
            stage: stage === 17 || stage === 18 ? stage + memberType : stage + 1,
            device_id: _getDeviceId(),
            skip: true,
        };
        if (stage === 9) {
            data.logic_riddle = JSON.stringify(generateGuessColor())
        }
        this.props.makeAction(RIDDLE_SOLVED_REQUEST, {data});

        AsyncStorage.setItem(`skip_${id}`, '1')
    };

    pauseGame = () => {
        const {id} = this.props.game;
        this.props.makeAction(
            SHOW_QUESTION_POPUP,
            {
                text: i18n.t(`modals.pauseWarning`),
                callback: () => {
                    this.props.makeAction(PAUSE_GAME_REQUEST, {id});
                }
            });
    };

    continueGame = () => {
        const {id} = this.props.game;
        this.props.makeAction(CONTINUE_GAME_REQUEST, {id});
    };

    exitGameSession = () => {
        this.props.makeAction(REMOVE_USER_JOINS_REQUEST, {data: {device_id: _getDeviceId()}});
    };

    render() {
        const {name} = this.state;
        const {language, game} = this.props;
        const IsPaused = game?.status === 'paused';
        return (
          <RefreshView>
              <View style={styles.container}>
                  <ImageBackground style={styles.backgroundImage}
                                   source={require("../../assets/images/background_1.png")}>

                      <LinearGradient style={styles.topCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>

                          <Header
                            hideProgress={true}
                            showBackIcon={true}
                            hideSettingsIcon={true}
                            text={i18n.t("screens.Settings.mainTitle")}
                            navigation={this.props.navigation}
                          />

                          <View style={{ width: "100%" }}>
                              <View style={styles.content}>
                                  <View style={styles.inputBox}>
                                      <Text style={styles.text}> Name </Text>
                                      <TextInput style={{ ...styles.text, ...styles.textInput }} value={name}
                                                 editable={false} />
                                  </View>

                                  <SelectInput
                                    onChange={this.changeLanguage}
                                    selectedKey={language}
                                    label={i18n.t("inputs.labels.language")}
                                    items={this.languageItems}
                                  />
                                  {
                                      game ?
                                        <>
                                            {game.game_mode === "timed" ?
                                              <NavigateButton
                                                title={i18n.t(IsPaused ? "buttons.continueGame" : "buttons.pauseGame")}
                                                onPress={IsPaused ? this.continueGame : this.pauseGame}
                                                color={colors.blue}
                                              /> : null}
                                            <NavigateButton
                                              title={i18n.t("buttons.skipRiddle")}
                                              onPress={this.checkIfFirstSkip}
                                              color={colors.blue}
                                            />
                                            <NavigateButton
                                              title={i18n.t("buttons.exitGameSession")}
                                              onPress={this.exitGameSession}
                                              color={colors.blue}
                                            />
                                        </>
                                        : null
                                  }

                              </View>
                          </View>
                      </LinearGradient>
                  </ImageBackground>
              </View>
          </RefreshView>
        );
    }
}


const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
