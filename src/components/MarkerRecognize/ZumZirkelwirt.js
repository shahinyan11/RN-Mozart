import React, {Component} from 'react';
import {
    ViroNode,
    ViroImage,
    ViroAmbientLight,
    ViroARImageMarker,
    ViroDirectionalLight,
    ViroARTrackingTargets,
} from '@viro-community/react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {RIDDLE_SOLVED_REQUEST, ADD_CREATED_TARGETS, SHOW_MAIN_POPUP} from "../../actionsTypes";
import {_getDeviceId} from "../../services/helpers";
import markersData from "../../services/markersData";
import i18n from "../../services/i18next";

class ZumZirkelwirt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }

    componentDidMount() {
        const {id, markers} = markersData.ZumZirkelwirt;
        if (!this.props.createdTargets.includes(id)) {
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }
    }

    foundObj = (key) => {
        const {flag} = this.state;
        if (flag) {
            this.setState({
                flag: false,
                visibleMarker: key
            });

            setTimeout(() => {
                const {id,stage} = this.props.game;
                this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                    data: {
                        id,
                        stage: stage + 1,
                        device_id: _getDeviceId(),
                    }
                });
            }, 1500)
        }
    };

    foundPapageno = () => {
        const {id, stage} = this.props.game;
        this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
            data: {
                id,
                stage: stage + 1,
                device_id: _getDeviceId(),
            }
        });
    };

    render() {
        const {markerDetails} = markersData.ZumZirkelwirt;
        const {visibleMarker} = this.state;
        const {game} = this.props;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>

                {
                    game.stage === 13 ?
                        <ViroARImageMarker target={'papageno'} onAnchorFound={this.foundPapageno}/>
                        :
                        Object.entries(markerDetails).map(([key, value]) => (
                            <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                                {
                                    visibleMarker === key ?
                                        <ViroNode scale={[0.5, 0.5, 0.5]} position={value.position}
                                                  rotation={value.rotation}>
                                            <ViroImage
                                                height={value.height}
                                                width={value.width}
                                                source={require('../../assets/images/sign.png')}
                                            />
                                        </ViroNode> : null
                                }
                            </ViroARImageMarker>
                        ))
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    createdTargets: state.mainReducer.createdTargets,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ZumZirkelwirt);
