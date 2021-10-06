import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity
} from 'react-native'

import {HIDE_CONTINUE_GAME_POPUP} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import i18n from "../../../services/i18next";
import {styles} from "./styles";
import Button from "../../Button";

class ContinueGame extends Component {

    handleClick = () => {
        const {continueGamePopup} = this.props;
        if(continueGamePopup.callback){
            continueGamePopup.callback()
        }
        this.props.makeAction(HIDE_CONTINUE_GAME_POPUP);
    };

    render() {
        const {continueGamePopup} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={continueGamePopup.visibility}
            >

                <View style={styles.modalContain}>
                    <View style={styles.messageBox}>
                        <Image source={require('../../../assets/images/pause.png')}/>
                        <Text style={styles.title}>
                            Mozarts Vermächtnis
                            ist nun pausiert!
                        </Text>
                        <Text style={styles.text}>
                            {i18n.t('modals.continueGame')}
                        </Text>


                        <Button
                            width={200}
                            height={60}
                            text={i18n.t('buttons.continueGame')}
                            onPress={this.handleClick}

                        />

                        <View style={{...styles.square, left: 3, top: 3}}/>
                        <View style={{...styles.square, right: 3, top: 3}}/>
                        <View style={{...styles.square, left: 3, bottom: 3}}/>
                        <View style={{...styles.square, right: 3, bottom: 3}}/>
                    </View>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    continueGamePopup: state.modalReducer.continueGamePopup,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContinueGame)
