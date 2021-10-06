import React, {Component} from 'react'
import {connect} from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {View, ImageBackground, Image, ScrollView} from 'react-native'
import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import {Player} from "@react-native-community/audio-toolkit";
import Sound from "react-native-sound";
import RefreshView from "../../components/RefreshView";

class RiddleSolved extends Component {

    constructor(props) {
        super(props);

        this.audio = new Sound(require('../../assets/audios/flute.mp3'), () => {
            this.audio.play()
        });
    }


    handlePress = () => {
        this.props.navigation.navigate('End', {audio: this.audio})
    };

    render() {
        return (
            <RefreshView>
                <LinearGradient style={styles.container}
                                colors={['rgba(36, 25, 32, 1)', 'rgba(36, 25, 32, 0.8)']}>

                    <ProgressBar navigation={this.props.navigation}/>

                    <View style={styles.squareContain}>
                        <ImageBackground source={require('../../assets/images/mozartContain.png')}
                                         style={styles.squareBackground}>
                            <View style={styles.imgMozartContainer}>

                                <Image style={styles.imgSolved}
                                       source={require('../../assets/images/solved.png')}/>
                                <Image style={styles.imgMozart}
                                       source={require('../../assets/images/mozart1.png')}/>
                            </View>
                        </ImageBackground>
                    </View>
                    <NavigateButton
                        title="Weiter"
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
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RiddleSolved)
