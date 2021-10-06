import React, {Component} from 'react';
import {View, Text, Image} from 'react-native'
import {createStyles} from './styles'
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import moment from "moment";

class TeamBox extends Component {


    render() {
        let {value, index, color} = this.props;
        const styles = createStyles(color);
        const icon = color ? require('../../assets/images/chess.png') : require('../../assets/images/chessBlue.png')
        return (
            <View style={styles.teamBoxContent}>
                <View style={styles.iconBox}>
                    <Text style={styles.text}>{index + 1}.</Text>
                    <Image style={styles.image}
                           source={icon}/>
                </View>

                <Text style={styles.text}> {value.team_name} </Text>
                <Text style={styles.time}>{moment.duration(value.time_spent, 'second').format('mm:ss')}</Text>
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
)(TeamBox)
