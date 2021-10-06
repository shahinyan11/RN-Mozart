import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {makeAction} from "../../makeAction";
import {colors} from "../../services/styles";
import {connect} from "react-redux";
import {styles} from "./styles";

class NavigateButton extends Component {


    render() {
        let {title, color, onPress, textColor, customStyles} = this.props;

        return (
            <TouchableOpacity onPress={onPress} style={{...styles.container , borderColor: color ? color : colors.orange, ...( customStyles || {} ) }}>
                <View style={{...styles.square, left: 0, top: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, right: 0, top: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, left: 0, bottom: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, right: 0, bottom: 0, backgroundColor: color ? color : colors.orange}}/>

                <Text style={{ ...styles.text, color: textColor ? textColor : "#ffffff"} }>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigateButton)
