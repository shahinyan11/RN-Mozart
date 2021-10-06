import React, {Component} from 'react';
import {View, Animated, TouchableHighlight} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import DownIcon from "../../assets/svgs/DownIcon";
import UpIcon from "../../assets/svgs/UpIcon";
import SquareNavigateButton from "../SquareNavigateButton";
import data from "../../services/data";
import {styles} from "./styles";
import GestureRecognizer from 'react-native-swipe-gestures'
import * as Animatable from 'react-native-animatable';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";

class BottomMenu extends Component {

    constructor(props) {
        super(props);

        this.defaultHeight = 65
        
        this.state = {
            active: false,
            height: this.defaultHeight,
            heightValue: new Animated.Value(this.defaultHeight)
        };

        this.ref = null
    }

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    onSwipeUp = (gestureState) => {
        const height =  294;
        this.ref.transitionTo({height});
        this.setState({
            height,
            active: true
        })
    };
    onSwipeDown = () => {
        this.ref.transitionTo({height: this.defaultHeight});
        this.setState({
            height: this.defaultHeight,
            active: false
        })
    }

    handlePress = () => {
        const {active} = this.state;
        active ? this.onSwipeDown() : this.onSwipeUp()
    }

    render() {
        const {active, height} = this.state;
        const {screenId, oriented} = this.props;
        const {squareNavigateButtons} = data;
        let control = 0;

        return (
            <Animatable.View
                ref={(ref) => {
                    this.ref = ref
                }}

                style={{...styles.container, height: height}}

            >

                <GestureRecognizer
                    onSwipeUp={(gestureState) => {
                        this.onSwipeUp(gestureState)
                    }}
                    onSwipeDown={this.onSwipeDown}
                    style={{flex: 1}}
                >
                    <TouchableHighlight style={{flex: 1}} onPress={this.handlePress}>
                        <LinearGradient
                            style={{flex: 1}}
                            colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                            useAngle={true}
                            angle={315}
                        >


                            <View>
                                <View style={styles.header}>
                                    {active ? <DownIcon fill="#ffffff"/> : <UpIcon fill="#ffffff"/>}
                                </View>
                                {active ?
                                    <View style={styles.content}>
                                        {
                                            squareNavigateButtons.map((value) => {
                                                    control += 1;
                                                    return (
                                                        <SquareNavigateButton
                                                            key={value.id}
                                                            data={value}
                                                            marked={value.id === screenId}
                                                            color={control > 3 ? '#39abd7' : '#e48146'}
                                                            onPress={() => {
                                                                this._navigate(value.routName, value.type)
                                                            }}
                                                            textStyle={{
                                                                color: "white"
                                                            }}
                                                        />
                                                    )
                                            })
                                        }
                                    </View> : null
                                }
                            </View>
                        </LinearGradient>
                    </TouchableHighlight>
                </GestureRecognizer>

            </Animatable.View>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomMenu)
