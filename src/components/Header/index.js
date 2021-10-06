import React, {Component} from 'react';
import {connect} from "react-redux";
import {View, Image, Text, TouchableOpacity, BackHandler} from 'react-native'
import ProgressBar from "../ProgressBar";
import {Prev} from '../../assets/svgs'
import data from "../../services/data";
import {colors} from "../../services/styles";

import {styles} from "./styles";

class Header extends Component {

    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress", this._goBack);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress", this._goBack);
    }

    _goBack =()=>{
        const {backScreen} = this.props;
        if(backScreen){
            this.props.navigation.navigate(backScreen)
        }else{
            this.props.navigation.goBack()
        }
        return true
    };

    render() {
        const {text, customStyle, showBackIcon, textStyle, backIconStyle, icon, hideSettingsIcon, hideProgress,game} = this.props;
        return (
            <View style={{
                ...styles.contain,
                ...customStyle
            }}>
                {
                    !hideProgress  ?
                        <ProgressBar navigation={this.props.navigation} hideSettingsIcon={hideSettingsIcon}/>
                        : null
                }


                <View style={styles.titleContain}>
                    {
                        showBackIcon ?
                            <TouchableOpacity
                                onPress={this._goBack}
                                style={{...styles.backIcon, ...backIconStyle}}
                            >
                                <Prev fill={colors.orange}/>
                            </TouchableOpacity>
                            : null
                    }
                    <View style={styles.title}>
                        {
                            icon ?
                                <Image
                                    style={styles.pageIcon}
                                    source={icon}
                                />
                                : null
                        }

                        <Text style={{...styles.text, ...textStyle}}>
                            {text}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});

export default connect(
    mapStateToProps,
    null
)(Header)
