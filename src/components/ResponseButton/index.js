import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native'
import {styles} from "./styles";
import {Close} from "../../assets/svgs";
import {makeAction} from "../../makeAction";
import {colors} from "../../services/styles";
import {connect} from "react-redux";

class ResponseButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    handlePress = () =>{
        if(this.state.active){
            if(this.props.openedButtonPress){
                this.props.openedButtonPress()
            }
        }else {
            this.setState({
                active: true
            })
        }
    }

    close =()=>{
        this.setState({
            active: false
        })
    }

    render() {
        let {title, text, color, oriented, game, id} = this.props;
        let {active} = this.state;
        const stage = game?.stage;
        return (
            <TouchableOpacity onPress={this.handlePress} style={{...styles.container , borderColor: color ? color : colors.orange }}>
                <View style={{...styles.square,  left: 0, top: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, right: 0, top: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, left: 0, bottom: 0, backgroundColor: color ? color : colors.orange}}/>
                <View style={{...styles.square, right: 0, bottom: 0, backgroundColor: color ? color : colors.orange }}/>

                <Text style={{ ...( active ? styles.titleActive : styles.title ) , color: color ? color : colors.orange}}>
                    {title}
                </Text>
                {
                    active ?
                        <>
                            <TouchableOpacity style={styles.closeIcon} onPress={this.close}>
                                <Close width={15} height={15} fill={color ? color : colors.orange}  />
                            </TouchableOpacity>
                            <Text style={styles.text}>
                                {text}
                            </Text>
                            {
                                stage === 7 && id === 3 ?
                                    <View>
                                        <View style={styles.row}>
                                            <Text style={styles.text} >Wasser: Paris raubt Helena</Text>
                                            <Image style={styles.image} source={require('../../assets/images/markers/statueWater/water_12.jpg')}/>
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.text}>Feuer: Aeneas rettet Anchises</Text>
                                            <Image style={styles.image} source={require('../../assets/images/markers/statueFire/fire_16.jpg')}/>
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.text}>Luft: Herkules ringt mit Anthaeus</Text>
                                            <Image style={styles.image} source={require('../../assets/images/markers/statueAir/air_16.jpg')}/>
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.text}>Erde: Hades entführt Persephon</Text>
                                            <Image style={styles.image} source={require('../../assets/images/markers/statueEarth/earth_16.jpg')}/>
                                        </View>
                                    </View>
                                    :null
                            }
                        </>
                        : null
                }
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponseButton)
