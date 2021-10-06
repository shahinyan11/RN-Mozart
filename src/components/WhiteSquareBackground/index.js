import React, {Component} from 'react';
import {connect} from "react-redux";
import {View, Image, Text} from 'react-native'
import {styles} from "./styles";
import data from "../../services/data";
import {createStyles} from "./styles";

class WhiteSquareBackground extends Component {

    render() {
        const {numberBackground, customStyle, game, responsive} = this.props;
        const isBig = game?.stage === 5 && responsive;
        const styles =  createStyles(isBig ? 553 : 387);
        const source =  isBig ? require('../../assets/images/squareBig.png') : require('../../assets/images/square.png');

        return (
            <View style={{
                ...styles.contain,
                ...customStyle
            }}>
                <Image
                    style={styles.imageBackground}
                    source={source }
                />
                {this.props.children}
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});

export default connect(
    mapStateToProps,
    null
)(WhiteSquareBackground)
