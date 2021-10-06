import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    ViroNode,
    ViroImage,
    ViroAmbientLight,
    ViroARImageMarker,
    ViroDirectionalLight,
    ViroARTrackingTargets,
} from '@viro-community/react-viro';
import {makeAction} from "../../makeAction";
import {RIDDLE_SOLVED_REQUEST, ADD_CREATED_TARGETS} from "../../actionsTypes";
import {_getDeviceId} from "../../services/helpers";
import markersData from "../../services/markersData";


class MozartHouse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }

    componentDidMount() {
        const {id, markers} = markersData.MozartHouse;
        if(!this.props.createdTargets.includes(id) ){
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }
    }

    foundObj = (key) => {
        const {flag} = this.state;
        if (flag) {
            this.setState({flag: false});
            this.setState({
                visibleMarker: key
            });

            const {id, stage} = this.props.game;
            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: _getDeviceId(),
                }
            });
        }
    };

    render() {
        const {visibleMarker} = this.state;
        const {markerDetails} = markersData.MozartHouse;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    Object.entries(markerDetails).map(([key, value]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                            {
                                visibleMarker === key ?
                                    <ViroNode scale={[0.5, 0.5, 0.5]} position={value.position}
                                              rotation={value.rotation}>
                                        <ViroImage
                                            height={value.height}
                                            width={value.width}
                                            source={require('../../assets/images/SecretSign.png')}
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
)(MozartHouse);
