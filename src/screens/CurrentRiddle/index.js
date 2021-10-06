import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import data from "../../services/data";
import SquareNavigateButton from "../../components/SquareNavigateButton";
import {createStyles} from './styles';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import DynamicContent from "./DynamicContent";
import {getCurrentMemberType} from "../../services/helpers";
import {_getDeviceId} from "../../services/helpers";
import i18n from "../../services/i18next";
import Header from "../../components/Header";
import RefreshView from "../../components/RefreshView";

class CurrentRiddle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }


    componentDidMount() {
        const {stage, game_members} = this.props.game;
        const memberType = getCurrentMemberType(game_members, _getDeviceId());
        const {title} = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
        this.setState({
            title
        })
    }

    componentDidUpdate(prevProps) {
        const {stage, game_members} = this.props.game;
        if (stage !== prevProps.game.stage) {
            const memberType = getCurrentMemberType(game_members, _getDeviceId());
            const {title} = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
            this.setState({
                title
            })
        }

    }

    _navigate = (screen, type) => {
        // this.props.navigation.navigate(screen, {video: true})
        this.props.navigation.navigate(screen, {type})
    };

    render() {
        const {title} = this.state;
        const {game} = this.props;
        const styles = createStyles();
        const {squareNavigateButtons} = data;
        let control = 0;
        return (
            <RefreshView>
                <View style={{flex: 1}}>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        <View style={{...styles.topCol, ...(game?.stage === 5 ? {paddingBottom: 533} : {})}}>
                            <Header
                                showBackIcon={true}
                                text={i18n.t('buttons.current_riddle')}
                                navigation={this.props.navigation}
                            />
                            <Text style={styles.title}>{i18n.t(title)}</Text>

                            <DynamicContent navigation={this.props.navigation}/>
                        </View>
                        <LinearGradient style={styles.bottomCol}
                                        colors={[ "rgba(36, 25, 32, 0.75)", '#241920']}
                                        useAngle={true}
                                        angle={315}
                        >
                            <View style={styles.bottomContent}>
                                {
                                    squareNavigateButtons.map((value) => {

                                        control += 1;
                                        return (
                                            <SquareNavigateButton
                                                key={value.id}
                                                data={value}
                                                marked={value.id === 2}
                                                color={control > 3 ? '#39abd7' : '#e48146'}
                                                onPress={() => {
                                                    this._navigate(value.routName, value.type)
                                                }}
                                                textStyle={{
                                                    color: "white"
                                                }}
                                            />
                                        )

                                    })
                                }
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </RefreshView>
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
)(CurrentRiddle);
