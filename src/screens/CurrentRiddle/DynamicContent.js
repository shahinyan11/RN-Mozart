import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import data from "../../services/data";
import {colors} from "../../services/styles";
import GuessColor from "../../components/GuessColor";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {errorAlert} from "../../services/helpers";
import NavigateButton from "../../components/NavigateButton";
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import {_getDeviceId} from "../../services/helpers";
import {getCurrentMemberType} from "../../services/helpers";
import i18n from '../../services/i18next'
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import {QuestionMarkIcon} from "../../assets/svgs";
import Puzzle from "../../components/Puzzle";
import Input from "../../components/Input";
import {HintIcon} from "../../assets/svgs";
import * as NavigationService from "../../NavigationService";
import ElementIcons from "../../components/ElementIcons";
import {createStyles} from "./styles";

const {ratioHeight} = data.deviceSizes;

class DynamicContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            visible: false,
            isValid: false,
            number: data.riddles[this.props.game?.stage].number,
            fontSize: data.riddles[this.props.game?.stage].fontSize || 20,
            text: data.riddles[this.props.game?.stage].text,
            answer: data.riddles[this.props.game?.stage].answer,
            solved: data.riddles[this.props.game?.stage].solved,
            memberType: 1,
        };
    }


    componentDidMount() {
        const { stage, game_members } = this.props.game;
        const memberType = getCurrentMemberType(game_members, _getDeviceId());
        const {
            text,
            number,
            answer,
            fontSize,
            solved,
        } = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
        this.setState({
            text: text,
            answer,
            memberType,
            solved,
            number,
            fontSize,
        });
    }

    componentDidUpdate(prevProps) {
        const { stage, game_members } = this.props.game;
        if (stage !== prevProps.game.stage) {

            const memberType = getCurrentMemberType(game_members, _getDeviceId());
            const {
                text,
                number,
                answer,
                fontSize,
                solved,
            } = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
            this.setState({
                text: text,
                answer,
                memberType,
                solved,
                number,
                fontSize,
            });
        }

    }

    handlePress = () => {
        const { answer, memberType, inputValue, isValid } = this.state;
        if (isValid) {

            const { id, stage } = this.props.game;

            if (inputValue.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").trim().search(answer.toLowerCase()) > -1) {
                this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                    data: {
                        id,
                        stage: stage > 16 ? stage + memberType : stage + 1,
                        device_id: _getDeviceId(),
                    },
                });

            } else {
                errorAlert("Error", "Falsche Antwort");
            }
        }

    };

    handleChange = (inputValue) => {
        this.setState({ inputValue });
    };

    render() {
        const { game } = this.props;
        const { text, solved, number, fontSize, memberType } = this.state;
        const styles = createStyles(game?.stage === 5, number > 9, fontSize);
        return (
          <WhiteSquareBackground numberBackground={number} responsive={true}>

              <View style={styles.squareContent}>
                  <TouchableOpacity
                    onPress={() => {
                        NavigationService.navigate("Hints");
                    }}
                    style={styles.hintIconBox}>
                      <HintIcon fill={colors.blue} />
                      <Text style={styles.textTipps}>TIPPS</Text>
                  </TouchableOpacity>
                  {game.stage !== 5 ? <QuestionMarkIcon /> : null}
                  <View style={styles.riddleContent}>
                      {
                          number ?
                            <Text style={styles.numberText}>
                                {number}
                            </Text>
                            : null
                      }
                      {game.stage === 5 ? <Puzzle /> : null}
                      <Text style={styles.text}>
                          {i18n.t(text)}
                      </Text>
                      {game.stage === 7 ? <ElementIcons fontSize={fontSize} /> : null}
                      {game.stage === 10 ? <GuessColor /> : null}
                      {game.stage === 16 ? <Image style={styles.imageStatue}
                                                  source={require("../../assets/images/mozartMonument.jpeg")} /> : null}
                      {
                          [5, 17, 18, 19].indexOf(game.stage) >= 0 && !solved ?
                            <>
                                <View style={styles.inputBox}>
                                    <Input
                                      _onSubmitEditing={this.handlePress}
                                      _handleChange={this.handleChange}
                                      _onValidation={isValid => this.setState({ isValid })}
                                      placeholder={i18n.t("inputs.placeholder.answer")}
                                      pattern={game.stage !== 5 && memberType === 2 ? {
                                          rule: "\\d{2}.\\d{2}.\\d{4}$",
                                          errorMessage: "Use this format dd-mm-yyyy",
                                      } : null}

                                    />
                                </View>

                                <View style={{ width: "90%" }}>
                                    <NavigateButton
                                      title="Antwort aktivieren"
                                      onPress={this.handlePress}
                                      color={colors.blue}
                                      textColor={colors.blue}
                                      customStyles={{ backgroundColor: "rgba(245, 245, 245, 0.6)" }}
                                    />
                                </View>
                            </>
                            :
                            game.stage === 14 ?
                              <View style={{ width: "90%", backgroundColor: "rgba(255,255,255, 0.85)", marginTop: 20 }}>
                                  <NavigateButton
                                    title={i18n.t("buttons.start_singing")}
                                    onPress={() => {
                                        this.props.navigation.navigate("Singing");
                                    }}
                                    color={colors.blue}
                                    textColor={colors.blue}
                                    customStyles={{ marginBottom: 0 }}
                                  />
                              </View>
                              : null
                      }
                  </View>
              </View>

          </WhiteSquareBackground>
        );

    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DynamicContent);
