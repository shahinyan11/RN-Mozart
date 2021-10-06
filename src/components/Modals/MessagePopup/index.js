import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    Modal,
} from 'react-native'

import {HIDE_MESSAGE_POPUP} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import {styles} from "./styles";
import i18n from "../../../services/i18next";
import Button from "../../Button";

class MessagePopup extends Component {

    handleClick = () => {
        const {messagePopup} = this.props;
        if(messagePopup.callback){
            messagePopup.callback()
        }
        this.props.makeAction(HIDE_MESSAGE_POPUP);
    };

    render() {
        const {messagePopup} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={messagePopup.visibility}
            >

                <View style={styles.modalContain}>
                    <View style={styles.messageBox}>
                        <Text style={styles.text}>
                            {messagePopup.text}
                        </Text>

                        <Button
                            onPress={this.handleClick}
                            text={i18n.t('words.yes')}
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
    messagePopup: state.modalReducer.messagePopup,

});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagePopup)
