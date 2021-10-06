import React, {Component} from 'react';
import {Image} from "react-native";
import {styles} from "./styles";
import Emitter from "../../services/Emitter";

class CupImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 0
        };

        Emitter.add('score', () => {
            this.setState({score: this.state.score + 1});
        });

        Emitter.add('gameOver_CatchTheDrops', ()=>{
            this.setState({score: 0});
        })
    }


    render() {
        const {score} = this.state;
        const key = Math.ceil(score / 3);
        return (
            <>
                <Image source={require('./images/bowl_1.png')}
                       style={{...styles.image, ...(key <= 1 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_2.png')}
                       style={{...styles.image, ...(key === 2 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_3.png')}
                       style={{...styles.image, ...(key === 3 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_4.png')}
                       style={{...styles.image, ...(key === 4 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_5.png')}
                       style={{...styles.image, ...(key === 5 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_6.png')}
                       style={{...styles.image, ...(key === 6 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_7.png')}
                       style={{...styles.image, ...(key === 7 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_8.png')}
                       style={{...styles.image, ...(key === 8 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_9.png')}
                       style={{...styles.image, ...(key === 9 ? {opacity: 1} : {})}}/>
                <Image source={require('./images/bowl_10.png')}
                       style={{...styles.image, ...(key === 10 ? {opacity: 1} : {})}}/>
            </>
        );
    }
}

export default CupImages;
