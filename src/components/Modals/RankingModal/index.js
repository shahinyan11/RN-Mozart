import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal, TextInput,
} from 'react-native';

import {ADD_TEAME_NAME_REQUEST, HIDE_MODAL_ELEMENT, TAKE_ELEMENT_REQUEST} from '../../../actionsTypes';
import {makeAction} from '../../../makeAction';
import NavigateButton from '../../NavigateButton';
import {colors} from "../../../services/styles";
import {styles} from './styles';

class RankingModal extends Component {


    constructor(props) {
        super(props);

        this.state = {
            teamName: '',
            visibility: false
        };
    }

    componentWillMount() {
        const {visibility} = this.props;
        this.setState({visibility})
    }

    componentWillUpdate(nextProps) {
        const {visibility} = this.props;
        if (visibility !== nextProps.visibility) {
            this.setState({visibility: nextProps.visibility})
        }

    }

    handlePress = () => {
        const {teamName} = this.state;
        const {id} = this.props.game;
        if (teamName !== '') {
            this.props.makeAction(ADD_TEAME_NAME_REQUEST, {id, name: teamName})
        }
        this.close();
    };


    handleChange = (teamName) => {
        this.setState({teamName})
    };

    close = () => {
        this.setState({visibility: false})
    };

    render() {
        const {teamName, visibility} = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility || false}
            >
                <LinearGradient style={styles.modalContain}
                                colors={['#241920', 'rgba(36, 25, 32, 0.5)']}
                                angle={335}
                >
                    <View style={styles.squareContain}>
                        <Image source={require('../../../assets/images/mask.png')}
                               style={styles.squareBackground}/>
                        <Image style={styles.icon}
                               source={require('../../../assets/images/rank.png')}/>
                        <View style={styles.textBox}>
                            <Text style={styles.text}>
                                Lorem ipsum dolar,
                                enter team name!
                            </Text>
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}> Team Name </Text>
                            <TextInput style={styles.textInput} value={teamName} onChangeText={(value) => {
                                this.handleChange(value)
                            }}/>
                        </View>
                        <NavigateButton
                            title="Submit"
                            onPress={this.handlePress}
                            color={colors.blue}
                            textColor={colors.blue}
                            customStyles={{backgroundColor: 'rgba(245, 245, 245, 0.6)'}}
                        />

                        <TouchableHighlight style={styles.modalClose} onPress={this.close}>
                            <Image style={styles.closeImage}
                                   source={require('../../../assets/images/close.png')}/>
                        </TouchableHighlight>
                    </View>
                </LinearGradient>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modalElement: state.modalReducer.modalElement,
    game: state.gameReducer.game,

});

const mapDispatchToProps = {
    makeAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RankingModal);
