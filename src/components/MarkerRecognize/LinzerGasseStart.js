import React, {Component} from 'react';
import {
    ViroNode,
    ViroText,
    ViroImage,
    ViroButton,
    Viro3DObject,
    ViroAmbientLight,
    ViroARImageMarker,
    ViroDirectionalLight,
    ViroARTrackingTargets, ViroCamera,
} from '@viro-community/react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {
    START_GAME_REQUEST,
    SOW_MOZART,
    HIDE_MOZART, ADD_CREATED_TARGETS, SHOW_MAIN_POPUP
} from "../../actionsTypes";
import {_getDeviceId} from "../../services/helpers";
import markersData from "../../services/markersData";
import i18n from "../../services/i18next";


class LinzerGasseStart extends Component {

    constructor(props) {
        super(props);
        this._unsubscribe = null;
        this.state = {
            flag: true,
            textVisibility: false,
            visibleMarker: '',
            objectPosition: [],
            text: 'Willkommen in meiner Welt. Begebt euch auf meine Spuren und versucht mein Vermächtnis zu finden! Seht euch immer wieder mittels Kamera und Augmented Reality auf eurem Weg um. Vielleicht findet ihr wichtige Utensilien. Aber beeilt euch, die Zeit läuft!'
        };
    }


    componentDidMount() {
        const {game, navigation} = this.props;
        if (+game?.stage === 1) {
            this._unsubscribe = navigation.addListener('blur', () => {
                if (this.props.visibilityMozart) {
                    this.startGame();
                }
            })
        }

        const {id, markers} = markersData.LinzerGasseStart;
        if (!this.props.createdTargets.includes(id)) {
            ViroARTrackingTargets.createTargets({...markers});
            this.props.makeAction(ADD_CREATED_TARGETS, {id})
        }
    }

    componentWillUnmount() {
        this._unsubscribe()
    }

    foundObj = (key) => {
        const {flag} = this.state;
        const {visibilityMozart} = this.props;

        if (flag) {
            this.setState({flag: false});

            if (!visibilityMozart) {
                this.setState({
                    visibleMarker: key
                });

                setTimeout(() => {
                    this.props.makeAction(SOW_MOZART);
                    this.props.callBack(true)
                }, 1500);
            }
        }
    };
    startGame = () => {
        const {id} = this.props.game;
        this.props.makeAction(START_GAME_REQUEST, {data: {device_id: _getDeviceId(), id}})
    };
    hideMozart = () => {
        this.startGame();
        this.props.makeAction(HIDE_MOZART);
        this.props.makeAction(SHOW_MAIN_POPUP, {
            image: require('../../assets/images/imageSign.png'),
            text: i18n.t('modals.stage_1')
        })

        this.props.callBack(false)
    };

    render() {
        const {visibilityMozart} = this.props;
        const {visibleMarker, cameraBugFix,textVisibility} = this.state;
        const {markerDetails} = markersData.LinzerGasseStart;

        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    visibilityMozart ?
                        <ViroCamera position={[0, 0, 0]} active={true}>

                            <>
                                <Viro3DObject
                                    type={'VRX'}
                                    source={require('../../3D_objects/OldMozart_msh/OldMozart_msh.vrx')}
                                    resources={[
                                        require('../../3D_objects/OldMozart_msh/OldMozart_msh.fbm/Mozart_Albedo.png'),
                                        require('../../3D_objects/OldMozart_msh/Mozart_Albedo.png'),
                                    ]}
                                    animation={{run: true, loop: true}}
                                    onLoadEnd={() => {
                                        this.setState({textVisibility: true})
                                    }}
                                    position={[1.8, -4, -15]}
                                    scale={[0.04, 0.04, 0.04]}
                                />
                                {
                                    textVisibility ?
                                        <>
                                            <ViroText
                                                text={this.state.text}
                                                scale={[4.5, 4.5, 4.5]}
                                                position={[-4.5, -1, -25]}
                                                width={2}
                                                height={4}
                                                outerStroke={{type: "Outline", width: 7, color: '#000'}}
                                                style={{
                                                    fontFamily: 'Arial',
                                                    fontSize: 17,
                                                    color: 'white',
                                                    textAlignVertical: 'center',
                                                    textAlign: 'center',

                                                }}
                                            />

                                            <ViroButton
                                                source={require("../../assets/images/start_button.png")}
                                                position={[1.5, 0, -5]}
                                                height={0.3}
                                                width={0.6}
                                                onClick={this.hideMozart}

                                            />
                                        </>
                                        : null
                                }
                            </>

                        </ViroCamera>
                        : null
                }
                {
                    Object.entries(markerDetails).map(([key, value]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                            {
                                !textVisibility && visibleMarker === key ?
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
    visibilityMozart: state.gameReducer.visibilityMozart,
    createdTargets: state.mainReducer.createdTargets,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinzerGasseStart);
