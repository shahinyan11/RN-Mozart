import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import channel from './services/pusher';
import i18n from './services/i18next';
import * as NavigationService from './NavigationService';
import RNSoundLevel from 'react-native-sound-level';
import {_getDeviceId} from './services/helpers';
import Geolocation from '@react-native-community/geolocation';
import {SafeAreaView, Vibration, AppState,BackHandler} from 'react-native';
import {distance, newTakenElementMessage} from './services/helpers';
import {requestMultiple} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Map from './screens/Map';
import End from './screens/End';
import Home from './screens/Home';
import Intro from './screens/Intro';
import Flappy from './Games/Flappy';
import Hints from './screens/Hints';
import Camera from './screens/Camera';
import Keypad from './screens/Keypad';
import Selfie from './screens/Selfie';
import CupFill from './screens/CupFill';
import Singing from './screens/Singing';
import MainMenu from './screens/MainMenu';
import Settings from './screens/Settings';
import WhackAMole from './Games/WhackAMole';
import StartGame from './screens/StartGame';
import Ranking from './screens/Ranking';
import FireFighter from './Games/FireFighter';
import Rucksack from './screens/Rucksack/index';
import RiddleSolved from './screens/RiddleSolved';
import CatchTheDrops from './Games/CatchTheDrops';
import CurrentRiddle from './screens/CurrentRiddle';
import StartingPoint from './screens/StartingPoint';

import {makeAction} from './makeAction';
import Emitter from './services/Emitter';
import Wrapper from './components/Wrapper';
import servicesData from './services/data';
import permissions from './services/permissions';

import {
    NEW_JOIN,
    GAME_WIN,
    GAME_OVER,
    START_GAME,
    SOW_QR_CODE,
    HIDE_QR_CODE,
    HIDE_ELEMENT,
    TAKE_ELEMENT,
    RIDDLE_SOLVED,
    SHOW_MESSAGE_POPUP,
    SHOW_MODAL_ELEMENT,
    MAKE_CAMERA_VISIBLE,
    MAKE_CAMERA_INVISIBLE,
    RIDDLE_SOLVED_REQUEST,
    GET_USER_ACTIVE_GAME_REQUEST,
    SHOW_MAIN_POPUP,
    FINISH_GAME,
    CONTINUE_GAME_REQUEST,
    SHOW_CONTINUE_GAME_POPUP,
    SHOW_FLASH_MESSAGE_POPUP, BLOCK_ELEMENT_APPEARING, SHOW_QUESTION_POPUP, SET_GAME_MODE_REQUEST,
} from "./actionsTypes";
import Orientation from "react-native-orientation-locker";
import {ViroUtils} from '@viro-community/react-viro';


const isARSupportedOnDevice = ViroUtils.isARSupportedOnDevice;
const Stack = createStackNavigator();

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.interval = null;
        this.gameDuration = 120 * 60;

        this.state = {
            orientation: 'landscape',
            foundObject: null,
        };

        this.watchID = null;
    }

    componentWillMount(){
        isARSupportedOnDevice(this._handleARNotSupported, ()=>{});

        // AppState.removeEventListener("change");
        // Dimensions.removeEventListener('change');
    }

    _handleARNotSupported =(reason)=>{
        console.log("AR not supported, with reason: " + reason);
        this.props.makeAction(SHOW_MESSAGE_POPUP, {
            text: i18n.t("modals.notArSupport"),
            callback: () => { BackHandler.exitApp() }
        });
    }


    componentDidMount() {
        this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: _getDeviceId()}});

        this.setListeners();

        Emitter.add('take-element', (data) => {
            const element = servicesData.elements[data.elementName];
            this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'take'});
        });

    }

    componentWillUpdate(nexProps){
        const {game} = this.props;
        if (game === null && nexProps.game.status === 'finale') {
            NavigationService.navigate("RiddleSolved")
        }
    }

    componentDidUpdate(prevProps) {
        const {game} = this.props;
        if (prevProps.game === null && game) {
            channel.bind(`newJoin${game.id}`, (data) => {
                if (data.device_id !== _getDeviceId()) {
                    this.props.makeAction(NEW_JOIN, data);
                }
            });
            channel.bind(`startGame${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    this.props.makeAction(START_GAME, data.data);
                }
            });
            channel.bind(`riddleSolved${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    const {game} = data.data;
                    if (+game.stage === 4) {
                        NavigationService.navigate('CupFill');
                    }
                    this.props.makeAction(RIDDLE_SOLVED, data.data);
                }
            });
            channel.bind(`takeElement${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    this.props.makeAction(TAKE_ELEMENT, data);
                    Vibration.vibrate();
                    this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, newTakenElementMessage(data.data.element.name));
                }
            });
            channel.bind(`gameWin${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    this.props.makeAction(GAME_WIN);
                    NavigationService.navigate('RiddleSolved');
                }
            });
            channel.bind(`finishGame${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    this.props.makeAction(FINISH_GAME);
                    NavigationService.navigate('Home');
                }
            });
            channel.bind(`showPopup${game.id}`, (data) => {
                if (data.data.device_id !== _getDeviceId()) {
                    const data = servicesData.popupData[this.props?.game.stage];
                    if(data){
                        this.props.makeAction(SHOW_MAIN_POPUP, {
                            image: data?.image,
                            text: i18n.t(data?.text),
                            blockUpdateMessage: true
                        })
                    }
                }
            });

            const time = this.gameDuration * 1000 - moment().diff(moment(game?.start_date));
            if (time > 0) {
                setTimeout(() => {
                    this.props.makeAction(SHOW_MESSAGE_POPUP, {text: i18n.t("modals.timeOver")} );
                }, time);
            }
            if(!game.game_mode){
                this.props.makeAction(SHOW_QUESTION_POPUP, {
                    text: i18n.t(`alerts.chooseGameMode`),
                    type: "vertical",
                    callback: (event) => {
                        if(event === 'timedMode'){
                            this.timedMode(this.props.game?.id)
                        } else if(event === 'unTimedMode'){
                            this.unTimedMode(this.props.game?.id)
                        }

                        this.props.makeAction(SHOW_MESSAGE_POPUP, {
                            text: i18n.t(`alerts.traffic`),
                        });
                    }
                });
            }
        }

        if (prevProps.game?.stage !== game?.stage && ( +game?.stage === 6 || +game?.stage === 13 ) ) {
            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                text: i18n.t(`alerts.traffic`),
            });
            if (+this.props.game?.stage === 6) {
                this.interval = setInterval(() => {
                    if(moment().diff(moment(game?.updated_at), 'second') > 200 && +this.props.game?.stage === 6){
                        this.updateRiddle()
                    }
                }, 10000)
            }

        }

        if (prevProps.game !== game?.stage && game?.stage > 7) {
            Emitter.rmoveAll(['take-element']);
        }
        if (prevProps.game !== game?.stage && game?.stage > 6) {
            clearInterval(this.interval)
        }

        if (prevProps.game && prevProps.game?.stage < game?.stage) {
            const data = servicesData.popupData[prevProps.game.stage];
            if (data && data.afterUpdate) {
                this.props.makeAction(SHOW_MAIN_POPUP, {
                    image: data.image,
                    text: i18n.t(data.text)
                })
            } else {
                if (+prevProps.game.stage !== 3 && +prevProps.game.stage !== 6 ) {
                    Vibration.vibrate();
                    this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t('modals.riddleSolved')});
                }
            }
        }

        if (game?.status !== prevProps.game?.status && game?.status === 'paused') {
            this.props.makeAction(SHOW_CONTINUE_GAME_POPUP, {
                callback: ()=>{
                    this.props.makeAction(CONTINUE_GAME_REQUEST, {id: game.id});
                }
            })

        }
    }

    componentWillUnmount() {
        RNSoundLevel.stop();
        this.clearAllListeners();
    }

    timedMode = (id) => {
        const data = {
            game_mode: "timed",
        };
        this.props.makeAction(SET_GAME_MODE_REQUEST, { data:{id:id,data:data}  });
    };

    unTimedMode = (id) => {
        const data = {
            game_mode: "unTimed",
        };
        this.props.makeAction(SET_GAME_MODE_REQUEST, { data:{id:id,data:data}  });
    }


    setListeners = () => {
        requestMultiple([permissions.location_in_use, permissions.microphone, permissions.file]).then((status) => {
            if (status[permissions.location_in_use] === 'granted') {
                this.watchID = Geolocation.watchPosition(this.watchSuccess, this.watchError, {distanceFilter: 1});
            }
        });

        AppState.addEventListener('change', (value) => {
            if ( value === 'active' ) {
                this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: _getDeviceId()}});
            }
        });

    };

    updateRiddle = () => {
        const {id, stage} = this.props.game;
        this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
            data: {
                id,
                stage: stage + 1,
                device_id: _getDeviceId(),
            },
        });
    };

    clearAllListeners = () => {
        AppState.removeEventListener('change');
        Geolocation.clearWatch(this.watchID);
        // Dimensions.removeEventListener('change');
    };

    watchSuccess = (watchData) => {
        if (this.props.game) {
            const {stage} = this.props.game;
            const {latitude, longitude} = watchData.coords;

            const foundObj = this.foundObject(latitude, longitude);

            if (foundObj?.type === 'popup' && foundObj.appearing &&  stage === 3 ) {
                // foundObj.appearing && stage === 3 ? this.props.makeAction(SOW_QR_CODE, {data: foundObj}) : null;

                this.props.makeAction(SHOW_MAIN_POPUP, {
                    image: foundObj.image,
                    text: i18n.t(foundObj.text),
                    blockUpdateMessage: true
                });

                this.props.makeAction( BLOCK_ELEMENT_APPEARING, {data :{followingId:  foundObj.id}});
            }

            else if ( (+stage === 13 || +stage === 6 ) && foundObj?.type === 'riddle') {
                this.updateRiddle()
            }
            else {
                const {QRCodeData, element} = this.props;
                if (QRCodeData) {
                    this.props.makeAction(HIDE_QR_CODE);
                } else if (element) {
                    this.props.makeAction(HIDE_ELEMENT);
                }
            }
        }
    };

    watchError = () => {
        this.props.makeAction(SHOW_MESSAGE_POPUP, {
            text: 'Der Standortzugriff ist am Telefon nicht aktiviert',
        });
    };

    foundObject = (latitude, longitude) => {
        const {followingCoords} = this.props;
        const founded = followingCoords.find((value) => {
            return distance(latitude, longitude, value.coords?.latitude, value.coords?.longitude) <= 20;
        });
        return founded || false;
    };

    navigationStateChange = (state) => {
        const prevRouteName = state.routes[state.index - 1]?.name;
        const currentRouteName = state.routes[state.index]?.name;
        const {gameScreens} = servicesData;
        if (currentRouteName === 'Camera') {
            this.props.makeAction(MAKE_CAMERA_VISIBLE);
        } else {
            this.props.makeAction(MAKE_CAMERA_INVISIBLE);
        }

        if (currentRouteName === 'Selfie') {
            Orientation.unlockAllOrientations();
        } else {
            Orientation.lockToPortrait()
        }

        if (prevRouteName !== currentRouteName && gameScreens.indexOf(currentRouteName) > -1) {
            this.clearAllListeners()
        } else if (prevRouteName !== currentRouteName && gameScreens.indexOf(prevRouteName) > -1) {
            this.setListeners()
        }
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Wrapper>
                    <NavigationContainer
                        ref={NavigationService.navigationRef}
                        onStateChange={this.navigationStateChange}
                    >
                        {/*<Stack.Navigator initialRouteName="Selfie" headerMode={'none'}>*/}
                        <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
                            <Stack.Screen name="Map" component={Map}/>
                            <Stack.Screen name="End" component={End}/>
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Intro" component={Intro}/>
                            <Stack.Screen name="Hints" component={Hints}/>
                            <Stack.Screen name="Flappy" component={Flappy}/>
                            <Stack.Screen name="Camera" component={Camera}/>
                            <Stack.Screen name="Keypad" component={Keypad}/>
                            <Stack.Screen name="Selfie" component={Selfie}/>
                            <Stack.Screen name="CupFill" component={CupFill}/>
                            <Stack.Screen name="Singing" component={Singing}/>
                            <Stack.Screen name="Ranking" component={Ranking}/>
                            <Stack.Screen name="MainMenu" component={MainMenu}/>
                            <Stack.Screen name="Settings" component={Settings}/>
                            <Stack.Screen name="Rucksack" component={Rucksack}/>
                            <Stack.Screen name="StartGame" component={StartGame}/>
                            <Stack.Screen name="WhackAMole" component={WhackAMole}/>
                            <Stack.Screen name="FireFighter" component={FireFighter}/>
                            <Stack.Screen name="RiddleSolved" component={RiddleSolved}/>
                            <Stack.Screen name="CatchTheDrops" component={CatchTheDrops}/>
                            <Stack.Screen name="CurrentRiddle" component={CurrentRiddle}/>
                            <Stack.Screen name="StartingPoint" component={StartingPoint}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </Wrapper>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    followingCoords: state.mainReducer.followingCoords,
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
