import React, {Component} from 'react'
import {connect} from "react-redux";
import {Text, View, ImageBackground, TextInput, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import NavigateButton from "../../components/NavigateButton";
import ResponseButton from "../../components/ResponseButton";
import {QuestionMarkIcon} from "../../assets/svgs";
import {makeAction} from "../../makeAction";
import {errorAlert} from "../../services/helpers";
import {styles} from './styles'
import i18n from "../../services/i18next"
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import data from "../../services/data";
import Header from "../../components/Header";
import RefreshView from "../../components/RefreshView";
import {SHOW_MESSAGE_POPUP} from "../../actionsTypes";
import {colors} from "../../services/styles"

const {ratioHeight} = data.deviceSizes;

class StartingPoint extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };

        this.riddle = {
            answer: 'linzergasse',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'screens.StartingPoint.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2_solution',
                    text: 'screens.StartingPoint.hints.2'
                },
            ]
        }
    }

    handlePress = (screen) => {
        let {inputValue} = this.state;
        const {answer} = this.riddle;

        if (inputValue.toLowerCase().replace(/\s/g, '').search(answer) > -1) {
            this.props.navigation.navigate(screen)
        } else {
            // errorAlert('Error', 'Falsche Antwort');
            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                text: i18n.t(`modals.wrongAnswer`),
            });
        }
    };

    handleChange = (inputValue) => {
        this.setState({inputValue})
    };


    render() {
        const {hints} = this.riddle;
        const {game} = this.props;

        return (
            <RefreshView>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        <View style={styles.topCol}>

                            <Header
                                textStyle={{fontSize: ratioHeight * 39}}
                                showBackIcon={true}
                                text={i18n.t('screens.StartingPoint.mainTitle')}
                                navigation={this.props.navigation}
                            />

                            <Text style={styles.description}>
                                {i18n.t('screens.StartingPoint.description')}
                            </Text>

                            <WhiteSquareBackground>
                                <View style={styles.squareContent}>
                                    <QuestionMarkIcon/>
                                    <View style={styles.textContent}>
                                        <Text style={styles.text}>
                                            {i18n.t('screens.StartingPoint.centerText')}
                                        </Text>
                                    </View>

                                </View>
                            </WhiteSquareBackground>

                        </View>
                    </ImageBackground>
                    <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.8)", "#241920"]}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>
                                {i18n.t('inputs.labels.solution')}:
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => {
                                    this.handleChange(text)
                                }}
                                onSubmitEditing={() => {
                                    this.handlePress(game ? 'MainMenu' : 'StartGame')
                                }}
                            />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            {hints.map((value, index) => (
                                <ResponseButton
                                    key={index}
                                    title={i18n.t(value.title)}
                                    text={i18n.t(value.text)}
                                    color={value.id === 3 ? colors.blue : null}
                                />
                            ))}
                            <NavigateButton
                                title={i18n.t('buttons.activate_answer')}
                                onPress={() => {
                                    this.handlePress(game ? 'MainMenu' : 'StartGame')
                                }}
                                color={colors.blue}
                                textColor={colors.blue}
                            />
                        </View>

                    </LinearGradient>
            </RefreshView>
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
)(StartingPoint)
