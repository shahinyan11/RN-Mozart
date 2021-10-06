import React, {Component} from 'react';
import {connect} from 'react-redux';
import {makeAction} from '../../makeAction';
import {View, Text, TouchableOpacity, Image, Dimensions, StatusBar} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import ViewShot from 'react-native-view-shot';
import {createStyles} from './styles';
import {requestMultiple} from 'react-native-permissions';
import {colors} from '../../services/styles';

import {ViroARSceneNavigator} from '@viro-community/react-viro';
import Ar from './Ar';
import permissions from "../../services/permissions";
import {LogoLandscape, Logo} from '../../assets/svgs'

class Selfie extends Component {

    constructor(props) {
        super(props);

        this._unsubscribe = null;

        this.state = {
            imageUrl: null,
            WRITE_EXTERNAL_STORAGE: false,
            isPortrait: true,
            showButtons: false,
        };

        requestMultiple([permissions.file]).then((status) => {
            if (status[permissions.file] === 'granted') {
                this.setState({
                    WRITE_EXTERNAL_STORAGE: true,
                });
            }
        });
    };


    isPortrait = () => {
        const dim = Dimensions.get('window');
        const res = dim.height >= dim.width;
        StatusBar.setHidden(!res);
        return res
    };

    componentDidMount() {
        Dimensions.addEventListener('change', () => {
            this.setState({
                isPortrait: this.isPortrait()
            });
        });


    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', () => {
        });
    }

    takePicture = async () => {
        if (this.camera) {
            await this.camera._takeScreenshot(`${new Date().getTime()}`, false).then((data) => {
                this.setState({
                    imageUrl: 'file://' + data.url,
                })
            });
        }
    };
    savePicture = () => {
        this.refs.viewShot.capture().then(uri => {
            CameraRoll.save(uri);
            this.props.navigation.goBack()
        });
    };

    cancel = () => {
        this.setState({
            imageUrl: null,
        })
    };

    render() {
        const {imageUrl, isPortrait, showButtons} = this.state;
        const styles = createStyles(isPortrait);
        return (
            <View style={styles.container}>

                <ViewShot ref="viewShot" style={styles.viewShot} options={{format: 'jpg', quality: 0.9}}>
                    <View style={styles.top}>
                        <View style={styles.topContent}>
                            {
                                isPortrait ?
                                    <View style={{alignItems: 'center'}}>
                                        <Logo/>
                                        <Text style={styles.siteLinkPrt}>www.virtual-escape.at</Text>
                                    </View>

                                    :
                                    <View style={styles.logoBox}>
                                        <LogoLandscape/>
                                        <Text style={styles.siteLink}>www.virtual-escape.at</Text>
                                        <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                                            <Image style={styles.image}
                                                   source={require('../../assets/images/camera.png')}/>
                                        </TouchableOpacity>
                                    </View>
                            }

                        </View>
                        <View style={styles.topDecor}/>
                    </View>
                    <View style={styles.center}>
                        <View style={styles.centerLeftDecor}/>
                        <View style={{flex: 1}}>
                            {
                                imageUrl ?
                                    <Image style={{flex: 1}} source={{uri: imageUrl}}/>
                                    :
                                    <ViroARSceneNavigator
                                        initialScene={{
                                            scene: Ar,
                                        }}
                                        ref={(ref) => {
                                            this.camera = ref
                                        }}
                                    />
                            }
                            <View style={[styles.square, styles.square_1]}/>
                            <View style={[styles.square, styles.square_2]}/>
                            <View style={[styles.square, styles.square_3]}/>
                            <View style={[styles.square, styles.square_4]}/>
                        </View>
                        <View style={styles.centerRightDecor}/>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.bottomDecor}/>
                    </View>

                </ViewShot>
                <View style={styles.actionsBox}>
                    {
                        imageUrl ?
                            <>
                                <TouchableOpacity onPress={this.cancel} style={styles.button}>
                                    <Text style={styles.text}> CANCLE </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.savePicture} style={styles.button}>
                                    <Text style={styles.text}> SAVE </Text>
                                </TouchableOpacity>
                            </>
                            : isPortrait ?
                            <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                                <Image source={require('../../assets/images/camera.png')}/>
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
    followingCoords: state.mainReducer.followingCoords,
    screenLoader: state.loaderReducer.screenLoader,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Selfie);
