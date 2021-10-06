import React, {Component} from 'react';
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal
} from 'react-native'

import {HIDE_MODAL_ELEMENT, TAKE_ELEMENT_REQUEST} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import i18n from "../../../services/i18next";
import {_getDeviceId} from "../../../services/helpers";
import {styles} from "./styles";

class ModalElement extends Component {


    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps) {
        const {count} = this.props.modalElement;
        if (count !== prevProps.modalElement.count) {
            const rightCount = count || 4 - this.props.game?.collected_elements.length;
            this.setState({
                count: rightCount
            })
        }

    }

    hideModalElement = () => {
        if (this.props.modalElement?.action === 'take') {
            this.takeElement()
        }

        this.props.makeAction(HIDE_MODAL_ELEMENT)
    };

    textStyling = (text) => {
        const textArr = text.split('|');
        return textArr.map((value, index) => {
            if (index === 1 || index === 3) {
                return (
                    <Text key={index} style={[styles.modalText, styles.blue]}>
                        {value}
                    </Text>
                )
            } else {
                return value
            }
        })
    };

    takeElement = () => {
        const {id} = this.props.game;
        const {element} = this.props.modalElement;
        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: id,
                device_id: _getDeviceId(),
                name: element.name
            }
        });
    };

    render() {
        const {count} = this.state;
        const {modalElement} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalElement.visibility }
            >
                <LinearGradient style={styles.modalContain}
                                colors={["#241920", "rgba(36, 25, 32, 0.75)"]}
                                angle={335}
                >
                    <View style={styles.squareContain}>
                        <Image source={require('../../../assets/images/mask.png')}
                               style={styles.squareBackground}/>
                        <Image style={styles[`${modalElement.element?.name}_icon`]}
                               source={modalElement.element?.srcModal}/>
                        <View style={styles.textBox}>
                            {
                                modalElement.action === 'take' ?
                                    <Text style={styles.takeText}>
                                        {i18n.t(`modals.takeElement`, {name: i18n.t(`words.${modalElement.element?.name}`) })}
                                    </Text>
                                    :
                                    <>
                                        <Text style={styles.attachText}>
                                            {this.textStyling(i18n.t(`modals.attach_${modalElement.element?.name}`))}
                                        </Text>
                                        <View style={styles.countBox}>
                                            <Text style={styles.count}> {count} </Text>
                                            <Text style={[styles.remainedText, styles.blue]}>
                                                {i18n.t('modals.remained')}
                                            </Text>
                                        </View>
                                    </>

                            }
                        </View>

                        <TouchableHighlight style={styles.modalClose} onPress={this.hideModalElement}>
                            <Image style={styles.closeImage}
                                   source={require('../../../assets/images/close.png')}/>
                        </TouchableHighlight>
                    </View>
                </LinearGradient>

                {/*}*/}

            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    modalElement: state.modalReducer.modalElement,
    game: state.gameReducer.game,

});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalElement)
