import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    KeyboardAvoidingView,
} from 'react-native'

import {makeAction} from "../../makeAction";

import {
    HIDE_QR_CODE,
    BLOCK_QR_APPEARING,
} from "../../actionsTypes";
import i18n from '../../services/i18next'
import MainPopup from "../Modals/MainPopup";
import MessagePopup from "../Modals/MessagePopup";
import ModalElement from "../Modals/ModalElement";
import QuestionPopup from "../Modals/QuestionPopup";
import FlashMessagePopup from "../Modals/FlashMessagePopup";
import {styles} from "./styles";
import ContinueGame from "../Modals/ContinueGame";

class WrapperComponent extends Component {

    handleClose = () => {
        if (this.props.game?.stage < 13) {
            Alert.alert(
                "QR Code",
                ' Wenn Sie diesen QR-Code nicht mehr auf Ihrem Bildschirm sehen möchten, klicken Sie auf "Nicht mehr anzeigen" und wenn diesmal nur auf "Schließen" ',
                [
                    {
                        text: "Nicht mehr anzeigen",
                        onPress: this.alwaysClose,
                        style: "cancel"
                    },
                    {
                        text: "Schließen",
                        onPress: this.simpleClose
                    }
                ],
                {cancelable: false}
            );
        } else {
            this.simpleClose()
        }

    };

    simpleClose = () => {
        this.props.makeAction(HIDE_QR_CODE);
    };
    alwaysClose = () => {
        const {QRCodeData} = this.props;
        this.props.makeAction(BLOCK_QR_APPEARING, {data: {followingId: QRCodeData.id}});
    };


    render() {
        const {QRCodeData} = this.props;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
                keyboardVerticalOffset={0}
                contentContainerStyle={{flex: 1}}
            >
                {this.props.children}

                {
                    QRCodeData ?
                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={this.handleClose}
                                style={styles.close}
                            >
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.qrText}> {i18n.t('modals.scanCode')} </Text>
                            <Image source={QRCodeData.src} style={styles.qrImage}/>
                        </View>
                        : null
                }
                <ModalElement/>
                <ContinueGame/>
                <MessagePopup/>
                <MainPopup/>
                <QuestionPopup/>
                <FlashMessagePopup/>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => ({
    QRCodeData: state.gameReducer.QRCodeData,
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperComponent)
