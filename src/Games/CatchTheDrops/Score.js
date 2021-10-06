import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "./styles";
import Emitter from "../../services/Emitter";
import * as NavigationService from "../../NavigationService";

class Score extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 100,
            score: 0
        }

        Emitter.add('count', () => {
           this.setState({count: this.state.count - 1});
        });
        Emitter.add('score', () => {
            this.setState({score: this.state.score + 1,});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const {score, count} = this.state;
        if (score !== prevState.score && score === 30) {
            Emitter.call('take-element', {elementName: 'water'});
            NavigationService.navigate("Rucksack", {elementName: 'water', backScreen: "CurrentRiddle"})
        }
        if (count !== prevState.count && count === 0) {
            Emitter.call('gameOver_CatchTheDrops');
            this.setState({
                score: 0,
                count: 100,
            })
        }
    }

    render() {
        const {count, score} = this.state;
        return (
            <View style={{width: '100%'}}>
                <Text style={styles.score}>{count}</Text>
                <View style={styles.scoreBox}>
                    <Text style={styles.score}>{score}</Text>
                    <Text style={styles.score}>/</Text>
                    <Text style={styles.score}>30</Text>
                </View>
            </View>
        );
    }
}

export default Score;
