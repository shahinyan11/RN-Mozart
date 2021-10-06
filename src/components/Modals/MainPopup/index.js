import React, {Component} from 'react';
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {_getDeviceId} from '../../../services/helpers';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal,
    TouchableOpacity,
    Vibration,
    ScrollView,
    Animated
} from 'react-native'

import {HIDE_MAIN_POPUP, RIDDLE_SOLVED_REQUEST, SHOW_FLASH_MESSAGE_POPUP} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import i18n from "../../../services/i18next";

import {styles} from "./styles";

class MainPopup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            indicator: new Animated.Value(0),
            wholeHeight: 1,
            visibleHeight: 0
        }
    }

    modalClose = () => {
        const {id, stage} = this.props.game;
        const {sendUpdateRequest, blockUpdateMessage} = this.props.mainPopup;
        if (sendUpdateRequest) {
            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: _getDeviceId(),
                },
            });
        }
        if (!blockUpdateMessage) {
            Vibration.vibrate();
            this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t('modals.riddleSolved')});
        }
        this.props.makeAction(HIDE_MAIN_POPUP);
    };


    render() {
        const {mainPopup, game} = this.props;

        const indicatorSize = this.state.wholeHeight > this.state.visibleHeight ?
            this.state.visibleHeight * this.state.visibleHeight / this.state.wholeHeight :
            this.state.visibleHeight;

        const difference = this.state.visibleHeight > indicatorSize ? this.state.visibleHeight - indicatorSize : 1;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={mainPopup.visibility}
            >
                <LinearGradient style={styles.modalContain}
                                colors={["#241920", "rgba(36, 25, 32, 0.75)"]}
                                angle={335}
                >
                    <View style={styles.squareContain}>
                        <Image source={require('../../../assets/images/mask.png')}
                               style={styles.squareBackground}/>
                        <Image style={styles.icon}
                               source={mainPopup.image}/>
                        <View style={{flexDirection: 'row', flex: 1, width: '95%', paddingBottom: 10}}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                onContentSizeChange={(width, height) => {
                                    this.setState({wholeHeight: height})
                                }}
                                onLayout={({nativeEvent: {layout: {x, y, width, height}}}) => this.setState({visibleHeight: height})}
                                scrollEventThrottle={16}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset: {y: this.state.indicator}}}],
                                    {useNativeDriver: false}
                                )}>

                                <View style={styles.textBox}>
                                    <Text style={styles.text}>
                                        {mainPopup.text}
                                    </Text>
                                </View>
                            </ScrollView>
                            {
                                difference > 1 ?
                                    <>
                                        <View style={{width: 5}}/>
                                        <Animated.View style={[
                                            styles.indicator, {
                                                height: indicatorSize,
                                                transform: [{
                                                    translateY: Animated.multiply(this.state.indicator, this.state.visibleHeight / this.state.wholeHeight).interpolate({
                                                        inputRange: [0, difference],
                                                        outputRange: [0, difference],
                                                        extrapolate: 'clamp'
                                                    })
                                                }]
                                            }]}/>
                                    </>
                                    : null
                            }

                        </View>


                        {
                            +game?.stage === 12 ?
                                <TouchableOpacity style={styles.button} onPress={this.modalClose}>
                                    <Image style={styles.image}
                                           source={require('../../../assets/images/ok.png')}/>
                                </TouchableOpacity>
                                : null
                        }

                        <TouchableHighlight style={styles.modalClose} onPress={this.modalClose}>
                            <Image style={styles.closeImage}
                                   source={require('../../../assets/images/close.png')}/>
                        </TouchableHighlight>
                    </View>
                </LinearGradient>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    mainPopup: state.modalReducer.mainPopup,
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPopup)
