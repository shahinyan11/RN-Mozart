import React, {Component} from 'react'
import {connect} from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {View, ImageBackground, Text, ScrollView} from 'react-native'
import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import i18n from "../../services/i18next";
import {FINISH_GAME_REQUEST, GAME_OVER, GAME_WIN_REQUEST} from "../../actionsTypes";
import * as NavigationService from "../../NavigationService";
import {_getDeviceId, normalize} from "../../services/helpers";
import RefreshView from "../../components/RefreshView";
import Header from "../../components/Header";

class End extends Component {

    handlePress = () => {
        // this.props.makeAction(GAME_OVER);
        this.props.makeAction(FINISH_GAME_REQUEST, {
            id: this.props.game?.id,
            device_id: _getDeviceId(),
        });
        this.stopAudio();
    };

    stopAudio =()=>{
        this.props.route?.params?.audio.stop();
    };

    render() {
        const {oriented} = this.props;
        return (
            <RefreshView>
                    <LinearGradient style={styles.container}
                                    colors={['rgba(36, 25, 32, 1)', 'rgba(36, 25, 32, 0.8)']}>

                        <Header
                            textStyle={{fontSize: normalize(39)}}
                            showBackIcon={false}
                            text={i18n.t('screens.End.title')}
                        />
                        <View style={{flex:1}}>
                            <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>
                                <ImageBackground source={require('../../assets/images/square.png')}
                                                 style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}>
                                    <View style={styles.imgMozartContainer}>
                                        <Text style={styles.text}>
                                            {i18n.t('screens.End.text')}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                        <NavigateButton
                            title="Get Selfie"
                            onPress={()=>{this.props.navigation.navigate('Selfie')}}
                            color={'#39abd7'}
                        />
                        <NavigateButton
                            title="Ranking"
                            onPress={()=>{this.props.navigation.navigate('Ranking')}}
                            color={'#39abd7'}
                        />
                        <NavigateButton
                            title="ZURÜCK ZUR ÜBERSICHT"
                            onPress={this.handlePress}
                            color={'#39abd7'}
                        />
                    </LinearGradient>
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
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
)(End)
