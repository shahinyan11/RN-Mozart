import React, {Component} from 'react';
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {RNCamera} from "react-native-camera";
import {_getDeviceId} from '../../services/helpers';
import {makeAction} from "../../makeAction";
import {View, Image, Modal, Text, TouchableHighlight, ScrollView, ImageBackground} from 'react-native';
import SquareNavigateButton from "../../components/SquareNavigateButton";
import data from "../../services/data";
import {styles} from './styles';
import {TAKE_ELEMENT_REQUEST, RIDDLE_SOLVED_REQUEST, BLOCK_QR_APPEARING, GAME_WIN_REQUEST} from "../../actionsTypes";
import i18n from '../../services/i18next'
import RefreshView from "../../components/RefreshView";

class QRscaner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            access: true,
            modalVisible: false,
            element: {name: ''},
            followingId: null
        };


    };

    componentDidMount(){
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                access: true,
            });
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    handleScan = (QRObject) => {
        const {access} = this.state;
        const {stage} = this.props.game;
        if (access) {
            const {followingCoords} = this.props;
            const text = QRObject.data;
            const founded = followingCoords.find((value) => {
                return value.text === text
            });
            if (stage < 8) {
                if (founded) {
                    this.setState({access: false});
                    // if (founded.right && stage === 3) {
                    //     this.props.makeAction(BLOCK_QR_APPEARING, {data:{ followingId: founded.id }});
                    //     this.props.navigation.navigate('Camera', {video: true, type:'ar'});
                    // } else {
                    this.setState({
                        modalVisible: true,
                        // element: data.elements[founded.element],
                        // followingId: founded.element.id
                    })
                    // }
                }
            } else if (stage === 20) {
                if (text === 'flute') {
                    this.setState({access: false});
                    this.props.makeAction(GAME_WIN_REQUEST, {
                        id: this.props.game?.id,
                        device_id: _getDeviceId(),
                        callback: ()=>{ this.props.navigation.navigate('RiddleSolved') }
                    });

                }
            } else if (stage === 8) {
                if (founded) {
                    this.setState({access: false});
                    const {id, stage} = this.props.game;
                    this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                        data: {
                            id,
                            stage: stage + 1,
                            device_id: _getDeviceId(),
                        }
                    });
                    // NavigationService.navigate('CurrentRiddle');
                }
            }
        }
    };

    takeElement = () => {
        this.setState({modalVisible: false});
        const {id} = this.props.game;
        const {element, followingId} = this.state;

        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: id,
                device_id: _getDeviceId(),
                name: element.name
            },
            callBack: () => {
                this.props.makeAction(BLOCK_QR_APPEARING, {data: {followingId}});
            }
            // callback:  this.setAccess
        });
    };

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    modalClose =()=>{
        this.setState({
            modalVisible: false,
        })
    };

    render() {
        const {modalVisible} = this.state;
        const {screenLoader} = this.props;
        const {squareNavigateButtons} = data;
        let control = 0;

        return (
            <RefreshView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{alignItems: 'center'}}>
                                <Image
                                    style={styles.element}
                                    source={require('../../assets/images/SecretSign.png')}
                                />
                                <Text style={styles.modalText}>
                                    {i18n.t('modals.incorrectLocation')}
                                </Text>
                            </View>
                            <TouchableHighlight style={styles.modalClose} onPress={this.modalClose}>
                                <Image style={styles.closeImage}
                                       source={require('../../assets/images/close.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        {/*{screenLoader ? <ScreenLoader/> : null}*/}
                        <LinearGradient style={styles.topCol}
                                        colors={['rgba(207, 149, 125, 0.5)', 'rgba(207, 149, 125, 0.5)']}>

                            <View style={styles.squareContain}>
                                {
                                    screenLoader ?
                                        null
                                        :
                                        <RNCamera
                                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                                            onBarCodeRead={(data) => {
                                                this.handleScan(data)
                                            }}
                                            captureAudio={false}
                                            style={styles.RNCamera}
                                        >
                                            <View style={{
                                                position: 'absolute',
                                                zIndex: 100,
                                                width: '100%',
                                                height: '100%',
                                            }}>
                                                <View style={{flex: 0.2, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                <View style={{flex: 0.60, flexDirection: 'row'}}>
                                                    <View style={{flex: 0.1, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                    <View style={{
                                                        flex: 0.8,
                                                        borderWidth: 2,
                                                        borderRadius: 8,
                                                        borderColor: 'white'
                                                    }}/>
                                                    <View style={{flex: 0.1, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                </View>
                                                <View style={{flex: 0.2, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                            </View>
                                        </RNCamera>
                                }
                            </View>

                        </LinearGradient>
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
                                                    marked={value.id === 6}
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
    followingCoords: state.mainReducer.followingCoords,
    screenLoader: state.loaderReducer.screenLoader,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QRscaner)
