import React, {Component} from 'react';
import {connect} from "react-redux";
import {View, Image, Text, TouchableOpacity} from 'react-native'
import moment from "moment";
import "moment-duration-format";
import SettingsIcon from "../../assets/svgs/SettingsIcon";
import {makeAction} from "../../makeAction";
import {styles} from "./styles";
import {colors} from "../../services/styles";

class ProgressBar extends Component {

    constructor(props) {
        super(props);

        this.percentByStage = 100 / 19; // 20 is game stages count
        this.state = {
            time: 0
        };

        this.interval = null;
        this.gameDuration = 120 * 60
    }

    componentWillMount() {
        if (this.props.game) {
            this.makeCountDown()
        }
    }


    componentDidUpdate(prevProps, prevState) {
        const {game} = this.props;
        if (prevProps.game?.status !== game?.status && !this.interval) {
            this.makeCountDown()
        }

        if( game?.stage !== prevProps.game?.stage){
            this.interval = clearInterval(this.interval);
            this.makeCountDown()
        }

        if( game?.status !== 'inProgress' && this.interval){
            this.interval = clearInterval(this.interval);
        }

        const {time} = this.state;
        if (prevState.time > 0 && time <= 0 && prevState.time !== time) {
            this.interval = clearInterval(this.interval);
        }
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    makeCountDown = () => {
        const {game} = this.props;
        const isInProgress = game?.status === 'inProgress';

        const timeDiff = isInProgress ? moment().diff(moment(game?.start_date), 'second') : 0 ;

        this.setState({
            time: this.gameDuration - game?.time_spent || 0 - timeDiff
        });
        if(isInProgress && !this.interval){
            this.interval = setInterval(() => {
                const time =  this.gameDuration - game?.time_spent - moment().diff(moment(game?.start_date), 'second');
                this.setState({
                    time: time > 0 ? time : 0
                })
            }, 1000);
        }

    };


    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    render() {
        const {game, hideSettingsIcon} = this.props;
        const time = moment.duration(this.state.time, 'second').format('mm:ss');
        const progress = game && game?.status === 'finished' ?  100 : Math.round(this.percentByStage * (game ? game.stage - 1 : 0));
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    {
                        game?.game_mode === 'timed' ?
                            <View style={styles.progressBar}>
                                <View style={{...styles.progress, width: `${progress}%`}}/>
                                <Text style={{
                                    ...styles.percentText, ...(progress <= 85 ? {
                                        left: `${progress + 2}%`,
                                        color: colors.orange
                                    } : {})
                                }}>{progress}%</Text>
                                <Image source={require('../../assets/images/flag.png')}
                                       style={styles.flag}/>
                            </View>
                            : null
                    }
                </View>
                <View style={styles.rightBox}>

                    {
                        game?.game_mode === 'timed' && game?.status !== 'finished' ?
                            <Text style={styles.countDown}>{`${time}min`}</Text>
                            : null
                    }

                    {
                        !hideSettingsIcon ?
                            <TouchableOpacity
                                style={styles.settingsButton}
                                onPress={() => {
                                    this.handlePress('Settings')
                                }}
                            >
                                <SettingsIcon/>
                            </TouchableOpacity>
                            : null
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});


const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar)
