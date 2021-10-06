import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Animated, Text, ImageBackground, Dimensions} from 'react-native'
import {styles} from './styles'
import Emitter from "../../services/Emitter";
import Score from "./Score";
import CupImages from "./CupImages";

const win = Dimensions.get('window');

class CatchTheDrops extends Component {

    constructor(props) {
        super(props);

        this.cupX = null;
        this.moveAccess = false;
        this.cupImage = null;
        this.container = null;

        this.cupPositionByScreen = {
            y: win.height - styles.cupContainer.height + styles.cupPosition.top,
            x: 0
        };

        this.state = {
            gameOver: false,
            started: false
        }

        Emitter.add('gameOver_CatchTheDrops', () => {
            this.setState({gameOver: true});
        })
    }

    componentWillUnmount(){
        Emitter.rmoveAll(['score', 'count', 'gameOver_CatchTheDrops'])
    }

    startNewGame = () => {
        this.animatedValues = Array.apply(null, Array(100)).map(this.createAnimatedValues);
        this.drops = {};
        this.setState({
            gameOver: false,
            started: true
        });

        this.setAnimatedTiming()
    };

    setAnimatedTiming = () => {
        this.animatedValues.map((value, index) => {
            setTimeout(() => {
                Animated.timing(
                    value.top,
                    {
                        toValue: win.height,
                        duration: 3000,
                    }
                ).start(() => {
                    Emitter.call('count');
                    value.top.removeListener()

                });
            }, index * 500)
        });
    };

    createAnimatedValues = (value, index) => {
        let top = new Animated.Value(-30);
        let left = parseInt(Math.random() * (win.width - 70) + 35);
        let id = index;

        top.addListener(({value}) => {
            const cupX = this.cupPositionByScreen.x;
            const cupY = this.cupPositionByScreen.y;

            if (this.isRightPosition(left, value, cupX, cupY) && this.drops[id]) {
                Emitter.call('score');
                this.drops[id].setNativeProps({style: {opacity: 0}});
                Animated.timing(top).stop();
                top.removeListener();
            }
        });
        return ({top, left, id})
    };

    isRightPosition = (dropX, dropY, cupX, cupY) => {
        const dropWidth = styles.imageDrop.width;
        const dropHeight = styles.imageDrop.height;
        const cupWidth = styles.cupPosition.width;
        const cupHeight = styles.cupPosition.height;

        const isRightX = dropX >= cupX && dropX + dropWidth <= cupX + cupWidth;
        const isRightY = dropY + dropHeight >= cupY && dropY < cupY + cupHeight;

        return isRightX && isRightY

    };

    onMove = (event) => {
        if (this.moveAccess) {
            const left = (this.cupX + (event.pageX - this.cupX)) - styles.cupContainer.width / 2;
            this.cupPositionByScreen.x = left + styles.cupPosition.left;
            this.cupImage.setNativeProps({style: {left}})
        }
    };

    handleTouch = (nativeEvent) => {

        this.cupX = nativeEvent.pageX;
        this.moveAccess = true
    };

    render() {
        const {gameOver, started} = this.state;
        return (
            <View style={{flex: 1, position: 'relative'}}
                  ref={(ref) => {
                      this.container = ref
                  }}
                  onMoveShouldSetResponder={(value) => {
                      this.onMove(value.nativeEvent)
                  }}
            >
                {
                    gameOver || !started ?
                        <View style={styles.gameOver}>
                            <Text style={styles.text}> {gameOver ? 'Game Over' : 'Click For Start'} </Text>
                            <TouchableOpacity onPress={this.startNewGame}>
                                <Image style={styles.restart}
                                       source={gameOver ? require('./images/btn-restart.png') : require('./images/btn-play.png')}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.container}>
                            {this.animatedValues.map((value) => (
                                <Animated.View
                                    key={value.id}
                                    style={[styles.animView, {top: value.top, left: value.left}]}
                                    ref={(ref) => {
                                        this.drops[value.id] = ref
                                    }}
                                >
                                    <Image
                                        style={styles.imageDrop}

                                        source={require('./images/drop.png')}
                                    />
                                </Animated.View>

                            ))}
                        </View>
                }
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('./images/bg.jpg')}
                >

                    <Score/>

                    <View style={styles.cupContainer}
                          onTouchStart={(value) => {
                              this.handleTouch(value.nativeEvent)
                          }}
                          onTouchEnd={() => {
                              this.moveAccess = false
                          }}
                          ref={(ref) => {
                              this.cupImage = ref
                          }}
                    >
                        <Text style={styles.cupPosition}/>

                        <CupImages/>

                    </View>
                </ImageBackground>


            </View>
        );
    }
}

export default CatchTheDrops;
