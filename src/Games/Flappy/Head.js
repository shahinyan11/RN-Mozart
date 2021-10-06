import React, {Component} from "react";
import {View, Image} from "react-native";
import {styles} from "./styles";

export default class Head extends Component {
    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x;
        const y = this.props.body.position.y;

        return (
            <View
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    overflow: 'hidden',
                    flexDirection: 'row',
                }}>

                <Image style={{width: width, height: height}} resizeMode="stretch"
                       source={require('./images/intro-hand.png')}/>

            </View>

        );
    }
}
