import React, {Component} from 'react';
import {_getDeviceId} from "../../services/helpers";
import {connect} from "react-redux";
import {ViroARImageMarker, ViroARTrackingTargets} from '@viro-community/react-viro';
import i18n from "../../services/i18next";

import {makeAction} from "../../makeAction";
import markersData from "../../services/markersData";
import * as NavigationService from "../../NavigationService";
import {SHOW_MESSAGE_POPUP, ADD_CREATED_TARGETS, RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";


class Cup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            switchCamera: false,
            flag: true
        };
    }

    componentDidMount() {
        const {id, markers} = markersData.Cup;
        if(!this.props.createdTargets.includes(id) ){
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }
    }


    currentMember = () => {
        if (this.props.game) {
            return this.props.game?.game_members.find((value) => {
                return value.device_id === _getDeviceId()
            });
        }
    };

    foundObj = () => {
        const {flag} = this.state;
        const {id, stage} = this.props.game;
        if (flag) {
            this.setState({flag: false});
            const member = this.currentMember();
            if (member.cup_active) {
                NavigationService.navigate('CupFill');
                this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                    data: {
                        id,
                        stage: stage + 1,
                        device_id: _getDeviceId(),
                    }
                });
            } else {
                this.props.makeAction(SHOW_MESSAGE_POPUP, {
                    text: i18n.t('alerts.cup_is_not_active'),
                    callback: () => {
                        this.setState({flag: true})
                    }
                });
            }
        }
    };

    render() {
        const {markers} = markersData.Cup;
        return (
            <>
                <>
                    {
                        Object.entries(markers).map(([key]) => (
                            <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
                        ))
                    }
                </>
            </>
        )
    }
}



const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    element: state.gameReducer.element,
    oriented: state.screenReducer.oriented,
    createdTargets: state.mainReducer.createdTargets,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cup);
