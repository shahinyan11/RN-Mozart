import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Viro3DObject,
    ViroSpotLight,
    ViroAnimations,
    ViroAmbientLight,
    ViroARImageMarker,
    ViroARTrackingTargets,
} from '@viro-community/react-viro';
import {makeAction} from '../../makeAction';
import {
    RIDDLE_SOLVED_REQUEST,
    ADD_CREATED_TARGETS,
    SHOW_MAIN_POPUP,
    SHOW_POPUP_EVENT_REQUEST
} from '../../actionsTypes';
import {_getDeviceId} from '../../services/helpers';
import markersData from '../../services/markersData';
import i18n from "../../services/i18next";
import servicesData from "../../services/data";

class Papageno extends Component {

    constructor(props) {
        super(props);

        this.interval = null;
        this.state = {
            objectVisible: false,
            intensity: 1000,
            z: 11,
            run: true,
            flag: true
        };
    }


    componentDidMount() {
        const {id, markers} = markersData.Papageno;
        if (!this.props.createdTargets.includes(id)) {
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }

        ViroAnimations.registerAnimations({
            animateBall: {
                properties: {
                    rotateY: 360,
                    positionZ: 20,
                },
                duration: 5000,

            },
        });

    }

    componentDidUpdate(prevProps) {
        const {stage} = this.props.game;
        if (prevProps.game.stage !== stage) {
            clearInterval(this.interval);
        }
    }

    foundObj = () => {
        const {flag} = this.state;
        if (flag) {
            const {id, stage} = this.props.game;
            const data = servicesData.popupData[stage];

            this.setState({flag: false});

            this.props.makeAction(SHOW_POPUP_EVENT_REQUEST, {
                id,
                device_id: _getDeviceId(),
            });

            this.props.makeAction(SHOW_MAIN_POPUP, {
                image: data.image,
                text: i18n.t(data.text),
                sendUpdateRequest: true
            });
        }
    };


    render() {
        const {markers} = markersData.Papageno;
        return (
            <>
                {
                    Object.entries(markers).map(([key]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
                    ))
                }

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    createdTargets: state.mainReducer.createdTargets,
});

const mapDispatchToProps = {
    makeAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Papageno);
