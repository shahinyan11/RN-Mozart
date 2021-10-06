import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native'
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import * as NavigationService from "../../NavigationService";
import {SHOW_MESSAGE_POPUP} from "../../actionsTypes";
import i18n from "../../services/i18next";
import {_getDeviceId} from "../../services/helpers";

class ElementIcons extends Component {

    constructor(props) {
        super(props);

        this.elementGames = {
            air: 'Flappy',
            earth: 'WhackAMole',
            fire: 'FireFighter',
            water: 'CatchTheDrops',
        };
    }

    navigateToGame = (target) => {
        const {collected_elements} = this.props.game;
        const membersCount = this.props.game?.game_members.length;
        let userElementsCount = 0;
        let isTaken = false;


        collected_elements.map((element) => {
            element.name === target ? isTaken = true : null;
            userElementsCount += element.device_id === _getDeviceId();
        });

        if (collected_elements.length < 4) {
            if (isTaken) {
                this.props.makeAction(SHOW_MESSAGE_POPUP, {
                    text: i18n.t(`alerts.element_already_taken`, {name: i18n.t(`words.${target}`)})
                });
            } else {

                const takeAccess = (membersCount < 2 && userElementsCount < 4) ||
                    (membersCount > 1 && membersCount < 4 && userElementsCount < 2) ||
                    (membersCount > 3 && userElementsCount < 1);

                if (takeAccess) {
                    NavigationService.navigate(this.elementGames[target]);
                } else {
                    this.props.makeAction(SHOW_MESSAGE_POPUP, {
                        text: i18n.t(`alerts.enough_space_${userElementsCount}`),
                    });
                }
            }
        }
    };

    isCollected = (name) => {
        const {collected_elements} = this.props.game;
        const res = collected_elements.find((value) => {
            return value.name === name;
        })
        return res ? styles.squareGrey : styles.square
    }

    render() {
        const {fontSize} =  this.props;
        const {collected_elements} =  this.props.game;
        const allCollected = collected_elements.length === 4;
        return (
            <View style={{...styles.container, ...(!allCollected ? {marginTop: 20 } : {}) }}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => {
                        this.navigateToGame('earth')
                    }} style={this.isCollected('earth')}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/earth.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.navigateToGame('air')
                    }} style={this.isCollected('air')}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/air.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.navigateToGame('fire')
                    }} style={this.isCollected('fire')}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/fire.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.navigateToGame('water')
                    }} style={this.isCollected('water')}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/water.png')}
                        />
                    </TouchableOpacity>

                </View>
                {
                    allCollected ?
                        <Text style={{...styles.text, fontSize: fontSize}}>{i18n.t('texts.AssignTheElements')}</Text>
                        : null

                }



            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementIcons)
