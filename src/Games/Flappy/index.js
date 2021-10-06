import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image} from 'react-native';
import Matter from "matter-js";
import {GameEngine} from "react-native-game-engine";
import Bird from './Bird';
import Floor from './Floor';
import Physics, {resetPipes} from './Physics';
import Constants from './Constants';
import Emitter from "../../services/Emitter";
import {styles} from "./styles";
import * as NavigationService from "../../NavigationService";


export default class Flappy extends Component {
    constructor(props) {
        super(props);

        this.inteval = null;
        this.numberImages = {
            1: require(`./images/1.png`),
            2: require(`./images/2.png`),
            3: require(`./images/3.png`),
        };

        this.state = {
            running: false,
            showSecond: false,
            button: 'start',
            score: 0,
            second: 3
        };

        this.gameEngine = null;

        this.entities = this.setupWorld();
    }

    componentDidUpdate(prevProps, prevState) {
        const {second, score} = this.state;
        if (second === 0 && second !== prevState.second) {

            clearInterval(this.inteval);

            resetPipes();
            this.gameEngine.swap(this.setupWorld());


            this.setState({
                running: true,
                showSecond: false,
                score: 0,
                second: 3
            });
        }

        if (score !== prevState.score && score === 6) {
            Emitter.call('take-element', {elementName: 'air'});
            NavigationService.navigate("Rucksack", {elementName: 'air', backScreen: "CurrentRiddle"})
        }
    }

    setupWorld = () => {
        let engine = Matter.Engine.create({enableSleeping: false});
        let world = engine.world;
        world.gravity.y = 0.0;

        // let head = Matter.Bodies.rectangle(
        //     styles.headImage.left,
        //     styles.headImage.top,
        //     styles.headImage.width,
        //     styles.headImage.height,
        //     {isStatic: true}
        // );

        let bird = Matter.Bodies.rectangle(
            70,
            Constants.MAX_HEIGHT / 2,
            Constants.BIRD_WIDTH,
            Constants.BIRD_HEIGHT
        );

        let floor1 = Matter.Bodies.rectangle(
            Constants.MAX_WIDTH / 2,
            Constants.MAX_HEIGHT - 75,
            Constants.MAX_WIDTH + 4,
            150,
            {isStatic: true}
        );

        let floor2 = Matter.Bodies.rectangle(
            Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2),
            Constants.MAX_HEIGHT - 75,
            Constants.MAX_WIDTH + 4,
            150,
            {isStatic: true}
        );

        // Matter.World.add(world, [bird, head, floor1, floor2]);
        Matter.World.add(world, [bird, floor1, floor2]);

        Matter.Events.on(engine, 'collisionStart', (event) => {
            var pairs = event.pairs;
            this.gameEngine.dispatch({type: "game-over"});

        });

        return {
            physics: {engine: engine, world: world},
            // head: {body: head, renderer: Head},
            floor1: {body: floor1, renderer: Floor},
            floor2: {body: floor2, renderer: Floor},
            bird: {body: bird, pose: 1, renderer: Bird},
        }
    }

    onEvent = (e) => {
        if (e.type === "game-over") {
            this.setState({
                running: false,
                button: 'restart',
            });

            Emitter.call('game-over');

        } else if (e.type === "score") {
            this.setState({
                score: this.state.score + 1
            })
        }
    };

    reset = () => {
        this.setState({
            showSecond: true
        });
        this.inteval = setInterval(() => {
            this.setState({
                second: this.state.second - 1,

            });
        }, 1000);
    };

    render() {
        const {button, second, showSecond} = this.state;

        return (
            <View style={styles.container}>
                <Image source={require('./images/bg.png')} style={styles.backgroundImage} resizeMode="stretch"/>
                <GameEngine
                    ref={(ref) => {
                        this.gameEngine = ref;
                    }}
                    style={styles.gameContainer}
                    systems={[Physics]}
                    running={this.state.running}
                    onEvent={this.onEvent}
                    entities={this.entities}>
                    <StatusBar hidden={true}/>
                </GameEngine>
                <Text style={styles.score}>{this.state.score}</Text>
                {
                    !this.state.running ?
                        <View style={styles.fullScreenButton}>
                            <View style={styles.fullScreen}>
                                {
                                    showSecond ?
                                        <Image style={styles.number} source={this.numberImages[second]}
                                               resizeMode="stretch"/>
                                        :
                                        <TouchableOpacity onPress={this.reset}>
                                            <Image style={styles.button} resizeMode="stretch"
                                                   source={button === 'start' ? require(`./images/start-btn.png`) : require(`./images/restart-btn.png`)}/>
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                        : null
                }
            </View>
        );
    }
}
