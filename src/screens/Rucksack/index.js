import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    View,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {_getDeviceId} from "../../services/helpers";
import BottomMenu from "../../components/BottomMenu/index";
import data from "../../services/data";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import {
    SOW_QR_CODE,
    CUP_ACTIVATE_REQUEST,
    ELEMENT_ACTIVATE_REQUEST, SHOW_MESSAGE_POPUP
} from "../../actionsTypes";
import i18n from "../../services/i18next/index"
import Header from "../../components/Header";
import RefreshView from "../../components/RefreshView";
import * as NavigationService from "../../NavigationService";

class Rucksack extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            element: {name: ''}
        }
    };

    componentDidMount() {
        const name = this.props.route.params?.elementName;
        if (name) {
            this.setState({
                modalVisible: true,
                element: data.elements[name]
            })
        }
    }

    componentDidUpdate(prevProps){
        const screen = this.props.route.params?.prevScreen;
        const prevScreen = prevProps.route.params?.prevScreen;
        if (screen && prevScreen !== screen) {
            NavigationService.reset(screen)
        }
    }

    componentWillUpdate(nextProps) {
        const name = this.props.route.params?.elementName;
        const nextName = nextProps.route.params?.elementName;
        if (nextName && nextName !== name) {
            const element = data.elements[nextName];
            // this.takeElement(element);
            this.setState({
                modalVisible: true,
                element,
            })
        }

    }

    activateCup = (active, id) => {
        if (this.props.game?.stage === 3) {
            this.props.makeAction(CUP_ACTIVATE_REQUEST, {id})
        } else {
            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                text: i18n.t('alerts.canNotNow')
            });
        }
    };
    activateElement = (active, id) => {
        if (!active) {
            this.props.makeAction(ELEMENT_ACTIVATE_REQUEST, {id})
        }
    };
    currentMember = () => {
        if (this.props.game) {
            return this.props.game?.game_members.find((value) => {
                return value.device_id === _getDeviceId()
            });
        }
    };

    getFlute = () => {
        if (this.props.game?.stage === 20) {
            this.props.makeAction(SOW_QR_CODE, {data: {src: require('../../assets/images/QRCodes/flute.png')}})
        } else {
            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                text: i18n.t('alerts.canNotNow')
            });
        }

    };

    render() {
        const {collected_elements, stage} = this.props.game;
        const backScreen = this.props.route.params?.backScreen;
        const currentMember = this.currentMember();
        return (
            <RefreshView>
                <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                 style={styles.backgroundImage}>
                    <LinearGradient style={styles.topCol}
                                    colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                                    useAngle={true}
                                    angle={315}
                    >
                        <Header
                            showBackIcon={true}
                            backScreen={backScreen}
                            icon={require('../../assets/images/backpack.png')}
                            text={i18n.t('screens.Rucksack.mainTitle')}
                            navigation={this.props.navigation}
                        />
                    </LinearGradient>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.elements}>

                            {
                                currentMember.cup ?
                                    <TouchableOpacity onPress={() => {
                                        this.activateCup(currentMember.cup_active, currentMember.id)
                                    }}>
                                        <Image source={require('../../assets/images/cup.png')}
                                               style={{...styles.item, ...(+stage > 3 ? styles.darkBorder : currentMember.cup_active ? styles.greenBorder : {})}}/>

                                    </TouchableOpacity>
                                    : null
                            }


                            {
                                collected_elements.map((value) => {
                                    if (value.device_id === _getDeviceId()) {
                                        return (
                                            <TouchableOpacity key={value.name} onPress={() => {
                                                this.activateElement(value.active, value.id)
                                            }}>
                                                <Image source={data.elements[value.name].src}
                                                       style={{...styles.item, ...(value.correct ? styles.darkBorder : value.active ? styles.greenBorder : {})}}/>
                                            </TouchableOpacity>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                            {
                                currentMember.flute ?
                                    <TouchableOpacity onPress={this.getFlute}>
                                        <Image style={styles.item}
                                               source={require('../../assets/images/flute.png')}/>
                                    </TouchableOpacity>

                                    : null
                            }
                        </View>
                    </ScrollView>

                    <BottomMenu
                        screenId={3}
                        navigation={this.props.navigation}
                    />
                </ImageBackground>
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

export default connect(mapStateToProps, {makeAction})(Rucksack);

