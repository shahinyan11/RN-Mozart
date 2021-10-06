import React, {Component} from 'react';
import {connect} from "react-redux";
import {ViroARTrackingTargets, ViroARImageMarker, ViroCamera, ViroVideo, ViroImage} from '@viro-community/react-viro';
import {
    BLOCK_ELEMENT_APPEARING,
    RIDDLE_SOLVED_REQUEST,
    TAKE_ELEMENT_REQUEST,
    ADD_CREATED_TARGETS
} from "../../actionsTypes";
import {_getDeviceId} from "../../services/helpers";
import {makeAction} from "../../makeAction";
import markersData from "../../services/markersData";

class RecognizeParacelsus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            switchCamera: false,
            flag: true
        };
    }

    componentDidMount() {
        this.setState({switchCamera: true});

        const {id, markers} = markersData.RecognizeParacelsus;
        if(!this.props.createdTargets.includes(id) ){
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }
    }


    foundObj = () => {
        const {flag} = this.state;
        if (flag) {
            const {id, stage} = this.props.game;

            this.setState({flag: false});

            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: _getDeviceId(),
                }
            });
            // NavigationService.navigate('CurrentRiddle');
        }
    };

    takeElement = () => {
        const {game, element} = this.props;
        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: game.id,
                device_id: _getDeviceId(),
                name: element.name,
            },
            callBack: () => {
                this.props.makeAction( BLOCK_ELEMENT_APPEARING, {data :{followingId:  element.id}});
            }
        });
    };

    finishVideo = () => {
        const {id, stage} = this.props.game;
        if (stage === 3) {
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
        const {markers} = markersData.RecognizeParacelsus;
        const {element, game, video} = this.props;
        const {switchCamera} = this.state;
        return (
            <>
                {
                    element && switchCamera?
                        <ViroCamera position={[0, 0, 0]} active={true}>
                            <ViroImage
                                position={[0, 0, -1]}
                                height={0.4}
                                width={0.4}
                                source={element.src}
                                onClick={this.takeElement}
                            />
                        </ViroCamera>
                        : game.stage === 2 ?
                            <>
                                {
                                    Object.entries(markers).map(([key]) => (
                                        <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
                                    ))
                                }
                            </>
                            : null

                }
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
)(RecognizeParacelsus);
