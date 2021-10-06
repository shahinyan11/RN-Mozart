import React, {Component} from 'react';
import {View, Text, Image} from 'react-native'
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";

class Member extends Component {


    render() {
        let {name} = this.props;

        return (
            <View style={styles.container }>
                <View style={{...styles.square, left: 0, top: 0}}/>
                <View style={{...styles.square, right: 0, top: 0}}/>
                <View style={{...styles.square, left: 0, bottom: 0}}/>
                <View style={{...styles.square, right: 0, bottom: 0}}/>

                <Image
                    style={styles.image}
                    source={require('../../assets/images/chess.png')}
                />
                <Text numberOfLines={1} style={styles.text}>
                    {name}
                </Text>
            </View>
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
)(Member)
