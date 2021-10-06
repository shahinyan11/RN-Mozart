import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, Vibration} from 'react-native'
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import * as NavigationService from "../../NavigationService";
import {myShuffle} from "../../services/helpers";
import i18n from "../../services/i18next";

const images = {
    0: require(`../../assets/images/seg_1.png`),
    1: require(`../../assets/images/seg_2.png`),
    2: require(`../../assets/images/seg_3.png`),
    3: require(`../../assets/images/seg_4.png`),
};

class Puzzle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstTouched: null,
            isCorrect: false,
            arr: myShuffle([0, 1, 2, 3])
        };
    }



    handlePress = (index) => {
        const {firstTouched, arr, isCorrect} = this.state;
        if (isCorrect) {
            Vibration.vibrate();
        } else {
            if (firstTouched === null) {
                this.setState({
                    firstTouched: index
                })

            } else {
                const val = arr[index];
                arr[index] = arr[firstTouched];
                arr[firstTouched] = val;
                const isCorrect = arr.toString() === '0,1,2,3';
                this.setState({
                    arr,
                    isCorrect,
                    firstTouched: null
                })
            }
        }
    };

    render() {

        const {arr, isCorrect} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.sign}>
                    {
                        arr.map((value, index) => (
                            <TouchableOpacity key={index} onPress={() => {
                                this.handlePress(index)
                            }}>
                                <Image style={styles[`segment_${index}`]} source={images[value]}/>
                            </TouchableOpacity>

                        ))
                    }

                </View>
                {
                    isCorrect ?
                        <View style={styles.callBox}>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('Keypad')
                            }}>
                                <Image style={styles.callImage} source={require('../../assets/images/call.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.text}>{i18n.t('texts.masonicPhone')}</Text>
                        </View>

                        : null
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Puzzle)
