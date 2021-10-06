import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {connect} from "react-redux";
import {ViroARSceneNavigator} from "@viro-community/react-viro";

import SquareNavigateButton from "../../components/SquareNavigateButton";
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import {HIDE_MOZART, SHOW_MAIN_POPUP} from "../../actionsTypes";
import MarkerRecognize from "../../components/MarkerRecognize";
import {makeAction} from "../../makeAction";
import data from "../../services/data";

import {styles} from './styles';
import Header from "../../components/Header";
import i18n from "../../services/i18next";

class CameraAr extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mozartFound: false
        }
    }


    _navigate = (screen, type) => {
        if (this.state.mozartFound) {
            this.props.makeAction(SHOW_MAIN_POPUP, {
                image:  require('../../assets/images/imageSign.png'),
                text: i18n.t('modals.stage_1')
            })
        }
        if (this.props.game?.stage === 2) {
            this.props.makeAction(HIDE_MOZART);
        }

        this.props.navigation.navigate(screen, {type})
    };


    render() {
        const {squareNavigateButtons} = data;
        const {navigation, video} = this.props;
        let control = 0;
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                 style={styles.backgroundImage}>
                    {/*{screenLoader ? <ScreenLoader/> : null}*/}
                    <View style={styles.topCol}>
                        <Header
                            showBackIcon={true}
                            text={'Ar Kamera'}
                            navigation={this.props.navigation}
                        />

                        <WhiteSquareBackground >
                            <View style={styles.squareContain }>
                                <ViroARSceneNavigator initialScene={{
                                    scene: MarkerRecognize,
                                    passProps: {
                                        navigation,
                                        video,
                                        callBack: (bool)=>{
                                            this.setState({mozartFound: bool});
                                        }
                                    }
                                }}/>
                            </View>
                        </WhiteSquareBackground>
                    </View>
                    <LinearGradient style={styles.bottomCol}
                                    colors={["rgba(36, 25, 32, 0.75)", '#241920']}
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
                                                marked={value.id === 5}
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
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    screenLoader: state.loaderReducer.screenLoader,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraAr);
