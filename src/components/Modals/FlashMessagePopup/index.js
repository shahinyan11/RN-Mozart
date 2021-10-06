import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import {HIDE_CONTINUE_GAME_POPUP, HIDE_FLASH_MESSAGE_POPUP} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import {createStyles} from "./styles";
import {styles} from "./styles";

class FlashMessagePopup extends Component {

    constructor(props){
        super(props);

        this.typeColors = {
            error: 'red',
        }
    }

    componentDidUpdate(prevProps) {
        const {visibility} = this.props.flashMessagePopup;
        const prevVisibility = prevProps.flashMessagePopup.visibility;
        if (visibility && visibility !== prevVisibility) {
            setTimeout(() => {
                this.hidePopup()
            }, 5000)
        }
    }

    hidePopup =()=>{
        this.props.makeAction(HIDE_FLASH_MESSAGE_POPUP)
    };

    render() {
        const {flashMessagePopup} = this.props;
        const styles =  createStyles(this.typeColors[flashMessagePopup.type]);
        return (
            <View style={styles.container}>
                {
                    flashMessagePopup.visibility ?
                        <TouchableOpacity style={styles.modalContain} onPress={this.hidePopup}>
                            <Text style={styles.text}>{flashMessagePopup.text}</Text>
                        </TouchableOpacity>
                        : null
                }
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    flashMessagePopup: state.modalReducer.flashMessagePopup,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlashMessagePopup)
