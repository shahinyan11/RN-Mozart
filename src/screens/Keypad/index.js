import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {connect} from "react-redux";
import {makeAction} from "../../makeAction";
import {Asterisk, Hashtag, Call, Delete, Prev} from "../../assets/svgs";
import {secondsToTime} from "../../services/helpers";
import * as NavigationService from "../../NavigationService";
import Sound from "react-native-sound";
const {ratioWidth} = data.deviceSizes;
import {SHOW_FLASH_MESSAGE_POPUP} from "../../actionsTypes";
import {colors} from "../../services/styles";
import i18n from "../../services/i18next";
import data from "../../services/data";

class Keypad extends Component {

    constructor(props) {
        super(props);

        this.interval = null;
        this.audio = new Sound(require('../../assets/audios/call.mp3'));

        this.state = {
            number: '',
            // correctNumber: '5',
            correctNumber: '436624865371',
            callLoader: false,
            started: false,
            duration: 0
        };
    }

    handleChange = (num) => {
        const {number} = this.state;
        this.setState({
            number: number + num
        })
    };

    handleRemove = () => {
        const {number} = this.state;
        this.setState({
            number: number.substring(0, number.length - 1)
        })
    };


    call = () => {
        const {number, correctNumber} = this.state;
        if (number && number.replace('+', '') === correctNumber) {
            this.setState({started: true});
            this.audio.play();
            this.interval = setInterval(() => {
                const {duration} = this.state;


                if (duration < 60 * 5) {
                    this.setState({
                        duration: duration + 1
                    });
                } else {
                    this.audio.stop();
                    clearInterval(this.interval)
                }
            }, 1000)
        } else {
            // showMessage({
            //     message: "We have written incorrect number",
            //     type: "danger",
            //     duration: 1000
            // });
            this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t('modals.incorrectNumber'), type: 'error'});
        }
    };

    callEnd = () => {
        this.setState({
            started: false,
            number: ''
        });
        this.audio.stop();
        NavigationService.goBack()
    };

    _goBack = () => {
        this.props.navigation.goBack();
        return true
    };

    render() {
        const {number, duration, started} = this.state;

        return (
            <ImageBackground source={require('../../assets/images/callBackground.jpg')} style={styles.screen}>
                {
                    !started ?
                        <>
                            <TouchableOpacity
                                onPress={this._goBack}
                                style={{
                                    position: 'absolute',
                                    top: 25,
                                    left: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Prev fill={colors.orange}/>
                                <Text style={styles.backText}>Back</Text>
                            </TouchableOpacity>
                            <View style={styles.topContainer}>
                                <Text
                                    selectable
                                    style={[styles.number, number.length > 11 ? styles.numberMedium : null, number.length > 14 ? styles.numberSmall : null]}
                                    ellipsizeMode={'head'} numberOfLines={1}
                                >
                                    {number}
                                </Text>
                            </View>
                        </>
                        : null
                }
                <View style={styles.keypadContainer}>
                    <View style={{...styles.center, flex: started ? 1 : null}}>
                        {
                            started ?
                                <View style={styles.call}>
                                    <View style={{alignItems: 'center',}}>
                                        <Image style={styles.mozartImage}
                                               source={require('../../assets/images/callMozart.png')}/>
                                        <Text>{secondsToTime(duration)}</Text>
                                    </View>
                                    <TouchableOpacity onPress={this.callEnd}>
                                        <Call fill={"red"}/>
                                    </TouchableOpacity>

                                </View>
                                :
                                <View style={styles.imageBackground}>
                                    <View style={styles.keypadRow}>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('1')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>1</Text>
                                            <Text style={styles.numberDesc}> </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('2')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>2</Text>
                                            <Text style={styles.numberDesc}>A B C</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('3')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>3</Text>
                                            <Text style={styles.numberDesc}>D E F</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.keypadRow}>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('4')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>4</Text>
                                            <Text style={styles.numberDesc}>G H I</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('5')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>5</Text>
                                            <Text style={styles.numberDesc}>J K L</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('6')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>6</Text>
                                            <Text style={styles.numberDesc}>M N O</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.keypadRow}>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('7')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>7</Text>
                                            <Text style={styles.numberDesc}>P Q R S</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('8')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>8</Text>
                                            <Text style={styles.numberDesc}>T U V</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('9')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>9</Text>
                                            <Text style={styles.numberDesc}>W X Y Z</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.keypadRow}>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('*')
                                        }} style={styles.button}>
                                            <Asterisk/>
                                            <Text style={styles.numberDesc}> </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('0')
                                        }} onLongPress={() => {
                                            this.handleChange('+')
                                        }} style={styles.button}>
                                            <Text style={styles.textNumber}>0</Text>
                                            <Text style={styles.numberDesc}>+</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.handleChange('#')
                                        }} style={styles.button}>
                                            <Hashtag/>
                                            <Text style={styles.numberDesc}> </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        }
                    </View>

                    {
                        !started ?
                            <View style={styles.footer}>
                                <View style={styles.footerBox}>
                                    {/*<TouchableOpacity*/}
                                    {/*onPress={this._goBack}*/}
                                    {/*style={styles.goBack}*/}
                                    {/*>*/}
                                    {/*<Text style={styles.backText}>Back</Text>*/}
                                    {/*</TouchableOpacity>*/}
                                </View>
                                <View style={styles.footerBox}>
                                    <TouchableOpacity onPress={this.call}>
                                        <Call size={ratioWidth * 75} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.footerBox}>
                                    {
                                        number ?
                                            <TouchableOpacity
                                                style={styles.removeButton}
                                                onPress={this.handleRemove}
                                                onLongPress={() => {
                                                    this.setState({number: ''})
                                                }}
                                            >
                                                <Delete/>
                                            </TouchableOpacity>
                                            : null
                                    }
                                </View>
                            </View>
                            : null
                    }

                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});

export default connect(mapStateToProps, {makeAction})(Keypad)
