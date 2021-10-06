import React, {Component} from 'react'
import {connect} from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {View, ScrollView, ImageBackground,} from 'react-native'
import {makeAction} from "../../makeAction";
import i18n from "../../services/i18next";
import {
    ADD_TEAME_NAME_REQUEST,
    GAME_OVER,
    GET_RANKING_LIST_REQUEST
} from "../../actionsTypes";
import * as NavigationService from "../../NavigationService";
import {styles} from './styles'
import moment from "moment";
import Header from "../../components/Header";
import RankingModal from "../../components/Modals/RankingModal";
import {colors} from "../../services/styles";
import TeamBox from "../../components/TeamBox";
import RefreshView from "../../components/RefreshView";

class Ranking extends Component {


    constructor(props) {
        super(props);

        this.item = null;

        this.state = {
            teamName: '',
            currentTeam: null,
            currentIndex: null,
            markedTeam: false,
            inTop: false,
        }
    }

    componentWillMount() {
        this.props.makeAction(GET_RANKING_LIST_REQUEST)
    }

    componentDidMount() {
        this.setCurrentTeam();
    }


    componentDidUpdate = (prevProps, prevState) => {
        const {rankingList} = this.props;
        const {markedTeam} = this.state;
        this.scrollView.measureInWindow((x, y, width, height) => {
            this.scrollViewData = {x, y, width, height};
            if (this.item && (markedTeam !== prevState.markedTeam || rankingList.length !== prevProps.rankingList.length)) {
                this.setMarkedTeam(y, height)
            }
        });

        if (rankingList.length !== prevProps.rankingList.length) {
            this.setCurrentTeam()
        }
    };

    setMarkedTeam = (y, height) => {
        this.item.measureInWindow((itemX, itemY, itemWidth, itemHeight) => {
            if (itemY > y + height || itemY + itemHeight < y) {
                this.setState({
                    markedTeam: true,
                    inTop: itemY + itemHeight < y
                })
            } else {
                this.setState({markedTeam: false})
            }
        })
    }

    setCurrentTeam = () => {
        const {rankingList} = this.props;
        rankingList?.forEach((value, index) => {
            if (value.id === this.props?.game?.id) {
                this.setState({
                    currentTeam: value,
                    currentIndex: index
                })
            }
        });
    };

    _onScroll = () => {
        const {y, height} = this.scrollViewData;
        this.setMarkedTeam(y, height)
    };

    render() {
        const {rankingList, game} = this.props;
        const {currentTeam, currentIndex, markedTeam, inTop, visible} = this.state;
        const timeOver =  moment().diff(moment(game?.start_date), 'minutes') > 120;
        const showModal = rankingList.length && !currentTeam && !game.pause_date && !timeOver
        return (
            <RefreshView>
                <View style={styles.container}>
                    <RankingModal visibility={game?.game_mode === 'timed' || showModal}/>
                    <ImageBackground style={styles.backgroundImage}
                                     source={require('../../assets/images/mozartBlue.png')}>

                        <LinearGradient style={styles.topCol}
                                        colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                                        useAngle={true}
                                        angle={315}
                        >
                            <Header
                                showBackIcon={true}
                                hideSettingsIcon={true}
                                text={i18n.t('screens.Ranking.title')}
                                navigation={this.props.navigation}
                            />
                        </LinearGradient>
                        <View style={{flex: 1}}>
                            <ScrollView onScroll={this._onScroll} ref={(ref) => {
                                this.scrollView = ref
                            }}>
                                <View style={styles.list}>
                                    {
                                        rankingList.map((value, index) => (
                                            <View
                                                ref={(ref) => {
                                                    index === currentIndex ? this.item = ref : null
                                                }}
                                                style={{...styles.teamBox, ...(index === currentIndex ? {backgroundColor: colors.orange} : {})}}

                                            >
                                                <TeamBox
                                                    key={index}
                                                    value={value}
                                                    index={index}
                                                    color={index === currentIndex ? colors.orange : null}
                                                />
                                            </View>

                                        ))
                                    }
                                </View>
                            </ScrollView>
                            {
                                markedTeam ?
                                    <View style={{
                                        alignItems: 'center',
                                        position: 'absolute',
                                        width: '100%', ...(inTop ? {top: 0} : {bottom: 0})
                                    }}>
                                        <View style={{
                                            ...styles.teamBox,
                                            backgroundColor: colors.orange,
                                        }}>
                                            <View style={{...styles.teamBox, backgroundColor: colors.orange}}>
                                                <TeamBox
                                                    value={currentTeam}
                                                    index={currentIndex}
                                                    color={colors.orange}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    : null
                            }
                        </View>

                    </ImageBackground>
                </View>
            </RefreshView>

        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    game: state.gameReducer.game,
    rankingList: state.mainReducer.rankingList,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ranking)
