import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Animated, Text, ImageBackground} from 'react-native'
import {styles} from './styles'
import * as NavigationService from "../../NavigationService";
import Emitter from "../../services/Emitter";

class WhackAMole extends Component {
    constructor(props) {
        super(props);

        this.arr = [0, 1, 2, 3, 4, 5, 6];
        this.state = {
            active: null,
            score: 0,
            isStarted: false,
            whacked: false,
            second: 20,
            gameOver: false,
        };

        this.holeHeight = styles.hole.height;
        this.countDownInterval = null;

        this.animatedValue_0 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_1 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_2 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_3 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_4 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_5 = new Animated.Value(this.holeHeight * -1);
        this.animatedValue_6 = new Animated.Value(this.holeHeight * -1);


    }

    componentDidUpdate(prevProps, prevState) {
        const {second, score} = this.state;
        if (prevState.second !== second && second === 0) {
            clearInterval(this.countDownInterval)
            clearInterval(this.convertNextStageInterval);
            this.setState({
                gameOver: true,
                isStarted: false
            });
        }
        if (score !== prevState.score && score === 10) {
            Emitter.call('take-element', {elementName: 'earth'});
            NavigationService.navigate("Rucksack", {elementName: 'earth', backScreen: "CurrentRiddle"})
        }
    }

    startGame = () => {
        this.setState({
            active: null,
            score: 0,
            isStarted: true,
            whacked: false,
            second: 20,
            gameOver: false,
        });
        this.convertNextStageInterval = setInterval(this.convertNextStage, 1000);
        this.countDownInterval = setInterval(this.countDown, 1000)
    };

    countDown = () => {
        this.setState({
            second: this.state.second - 1
        })
    };
    convertNextStage = () => {
        const {whacked} = this.state;
        const active = parseInt(Math.random() * 6);
        this.setState({
            active,
            whacked: false
        });
        Animated.timing(
            this[`animatedValue_${active}`],
            {
                toValue: styles.animViewToValue.bottom,
                duration: 350,
            }
        ).start();
        setTimeout(() => {
            Animated.timing(
                this[`animatedValue_${active}`],
                {
                    toValue: this.holeHeight * -1,
                    duration: 350,
                }
            ).start();
        }, 550)
    };
    handlePress = (value) => {
        if (this.state.active === value) {
            const score = this.state.score + 1;
            this.setState({
                score,
                whacked: true,
            })
        }

    };

    render() {
        const {active, score, isStarted, whacked, second, gameOver} = this.state;
        return (
            <ImageBackground
                style={styles.container}
                source={require('./images/bg.png')}

            >
                {
                    gameOver || !isStarted ?
                        <View style={styles.gameOver}>
                            <Text style={styles.text}> {gameOver ? 'Game Over' : 'Click For Start'} </Text>
                            <TouchableOpacity onPress={this.startGame}>
                                <Image style={styles.restart}
                                       source={gameOver ? require('./images/btn-restart.png') : require('./images/btn-play.png')}/>
                            </TouchableOpacity>
                        </View>
                        : null
                }

                <View>
                    <Text style={styles.score}>{second}</Text>
                    <View style={styles.scoreBox}>
                        <Text style={styles.score}>{score}</Text>
                        <Text style={styles.score}>/</Text>
                        <Text style={styles.score}>10</Text>
                    </View>
                </View>

                <View style={styles.title}>
                    <Image style={styles.titleImage} source={require('./images/title.png')}></Image>
                </View>

                <View style={styles.holesContain}>
                    {
                        isStarted ?
                            this.arr.map((value, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[0, 3].indexOf(index) > -1 ? styles.holeSingle : styles.hole}

                                    >
                                        <View style={styles.control}></View>
                                        <ImageBackground
                                            style={styles.imageHole}
                                            source={require('./images/hole.png')}
                                        >


                                            <Animated.View
                                                style={[styles.animView, (value === active ? {bottom: this[`animatedValue_${value}`]} : {})]}>
                                                <TouchableOpacity
                                                    style={styles.touch}
                                                    onPress={() => {
                                                        this.handlePress(value)
                                                    }}
                                                    disabled={whacked}
                                                >
                                                    <Image
                                                        source={whacked ? require('./images/mozart-whacked.png') : require('./images/mozart.png')}
                                                        style={styles.image}/>
                                                </TouchableOpacity>

                                            </Animated.View>

                                        </ImageBackground>
                                    </View>
                                )
                            })
                            : null
                    }
                </View>
            </ImageBackground>
        );
    }
}

export default WhackAMole;
