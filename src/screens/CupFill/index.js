import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    Vibration,
    View,
} from 'react-native'
import Video from "react-native-video";
import {makeAction} from "../../makeAction";
import i18n from "../../services/i18next";
import {styles} from './styles'
import servicesData from "../../services/data";
import {SHOW_FLASH_MESSAGE_POPUP} from "../../actionsTypes";

class CupFill extends Component {

    videoEnd = () => {
        this.props.navigation.goBack()
        Vibration.vibrate();
        this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t('modals.riddleSolved')});
    };

    render() {
        return (
            <View style={styles.container}>
                <Video
                    source={require('../../assets/videos/cup.mp4')}
                    onEnd={this.videoEnd}
                    resizeMode='stretch'
                    style={styles.video}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CupFill)
