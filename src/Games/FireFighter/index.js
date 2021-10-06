import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Alert, Text, ImageBackground, Dimensions} from 'react-native'
import {styles} from './styles'
import * as NavigationService from "../../NavigationService";
import data from "../../services/data";
import Draggable from "react-native-draggable";
import Emitter from "../../services/Emitter";

const win = Dimensions.get('window');
const {deviceSizes} = data;

class FireFighter extends Component {
    constructor(props) {
        super(props);

        this.fireBoxes = [];
        this.countDownInterval = null;
        this.arr = [];

        const {imageDock, firesContain, imageFire, fireBoxes} = styles;


        // this.count = parseInt((win.height - (imageDock.height + firesContain.paddingBottom)) / (imageFire.height / 2)) * parseInt(win.width / (imageFire.width / 2));
        this.horizontalCount = parseInt((win.height - (imageDock.height + firesContain.paddingBottom)) / fireBoxes.height);
        this.verticalCount = parseInt((win.width - firesContain.paddingRight) / fireBoxes.width);
        this.count = this.horizontalCount * this.verticalCount;


        this.state = {
            isStarted: false,
            gameOver: false,
            bucketPosition: null,
            randomIndexes: [],
            visibility: true,
            score: 0,
            second: 30
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const {second, score} = this.state;

        if (prevState.second !== second && second === 0) {
            clearInterval(this.countDownInterval);
            this.setState({
                gameOver: true,
                isStarted: false,

            });
        }
        if (score !== prevState.score && score === 10) {
            Emitter.call('take-element', {elementName: 'fire'});
            NavigationService.navigate("Rucksack", {elementName: 'fire', backScreen: "CurrentRiddle"})
        }
    }


    startGame = () => {
        this.arr = Array.apply(null, Array(this.count)).map(() => {
            return {access: true}
        });
        this.setState({
            bucketPosition: this.createBucketPosition(),
            randomIndexes: this.createRandomIndexes(),
            score: 0,
            second: 30,
            isStarted: true,
            gameOver: false,
        });
        this.countDownInterval = setInterval(this.countDown, 1000)
    };
    countDown = () => {
        this.setState({
            second: this.state.second - 1
        })
    };

    createBucketPosition = () => {
        return {
            x: win.width / 2 - styles.imageBucket.width / 2,
            y: win.height - (styles.imageDock.height / 2.07 + styles.imageBucket.height)
        }
    };

    childrenRender = () => {
        return (
            <Image source={require('./images/bucket-wood+icon.png')} style={styles.imageBucket}/>
        )
    };

    updateAccesses = (index, action) => {
        const blockedAccess = [
            index,
            index + 1,
            index - 1,
            index - this.horizontalCount,
            index + this.horizontalCount,
            index + 1 + this.horizontalCount,
            index + 1 - this.horizontalCount,
            index - 1 - this.horizontalCount,
            index - 1 + this.horizontalCount,
        ];
        blockedAccess.map((value) => {
            if (this.arr[value]) {
                this.arr[value]['access'] = action
            }
        });

    };


    createRandomIndexes = (data) => {
        const randomIndexes = data ? [...data] : [];

        while (randomIndexes.length < 5) {
            const index = Math.round(Math.random() * (this.count - 1));
            if (this.arr[index]['access']) {
                this.updateAccesses(index, false);
                randomIndexes.push(index)
            }
        }

        return randomIndexes
    };


    // this.setState({visibility: false});
    dragRelease = ({nativeEvent}, gestureState, bounds) => {
        const {pageX, pageY, locationX, locationY} = nativeEvent;
        const bucketX = pageX - locationX;
        const bucketY = pageY - locationY;
        const accuracy = 30;
        let {randomIndexes} = this.state;

        this.setState({visibility: false});

        this.fireBoxes.forEach((box, box_index) => {
            if (randomIndexes.indexOf(box_index) > -1) {
                box.measure((px, py, width, height, x, y) => {


                    const bool_x = x - bucketX > (-accuracy) && x - bucketX < accuracy;
                    const bool_y = y - bucketY > (-accuracy) && y - bucketY < accuracy;

                    if (bool_x && bool_y) {
                        let newArr = randomIndexes.filter((value) => {

                            if (value !== box_index) {
                                return true
                            } else {
                                this.updateAccesses(value, true);
                                return false
                            }
                        });

                        if (newArr.length < 3) {
                            newArr = this.createRandomIndexes(newArr)
                        }
                        this.setState({
                            score: this.state.score + 1,
                            randomIndexes: newArr
                        })
                    }
                    this.setState({visibility: true})
                })
            }
        });

    };

    render() {
        const {bucketPosition, gameOver, randomIndexes, isStarted, visibility, score, second} = this.state;

        return (

            <ImageBackground style={styles.container} source={require('./images/texture-overlay.png')}>
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
                <View style={styles.firesContain}>
                    {
                        isStarted ?
                            this.arr.map((value, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={styles.fireBoxes}

                                    >
                                        {
                                            randomIndexes.indexOf(index) > -1 ?
                                                <Image
                                                    style={styles.imageFire}
                                                    source={require('./images/mozart-fire.gif')}
                                                    ref={(ref) => {
                                                        this.fireBoxes[index] = ref
                                                    }}
                                                />
                                                : <Text
                                                    style={styles.emptyText}
                                                    ref={(ref) => {
                                                        this.fireBoxes[index] = ref
                                                    }}
                                                />
                                        }
                                    </View>

                                )
                            })
                            : null
                    }
                </View>


                <ImageBackground style={styles.imageDock} source={require('./images/dock.png')}>
                    <Image style={styles.imageShadow} source={require('./images/bucket-shadow.png')}/>
                </ImageBackground>

                {
                    visibility && isStarted ?
                        <Draggable
                            children={this.childrenRender()}
                            onDragRelease={this.dragRelease}
                            // onRelease={this.dragRelease}
                            shouldReverse={true}
                            x={bucketPosition.x}
                            y={bucketPosition.y}
                        />
                        : null
                }

            </ImageBackground>
        );
    }
}

export default FireFighter;
