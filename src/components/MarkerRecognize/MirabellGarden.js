import React, {Component} from 'react';
import {connect} from "react-redux";
import {ViroARImageMarker, ViroARTrackingTargets} from '@viro-community/react-viro';

import data from "../../services/data";
import i18n from "../../services/i18next";
import {makeAction} from "../../makeAction";
import {_getDeviceId} from "../../services/helpers";
import markersData from "../../services/markersData";

import {
    CORRECT_ELEMENT_REQUEST,
    SHOW_MODAL_ELEMENT,
    SHOW_MESSAGE_POPUP,
    ADD_CREATED_TARGETS,
    SHOW_QUESTION_POPUP
} from "../../actionsTypes";

class MirabellGarden extends Component {

    constructor(props) {
        super(props);

        this.activeElement = null;

        this.state = {
            checkMarkerAccess: true
        }
    }

    componentDidMount() {

        this.setState({checkMarkerAccess: true});

        const {collected_elements} = this.props.game;
        this.activeElement = collected_elements.find((element) => {
            return element.device_id === _getDeviceId() && element.active
        });
        if (this.activeElement) {
            const data = markersData.MirabellGarden[this.activeElement?.name];
            const id = data?.markers;
            const markers = data?.markers;
            if (!this.props.createdTargets.includes(id)) {
                ViroARTrackingTargets.createTargets({...markers});
                this.props.makeAction(ADD_CREATED_TARGETS, {id})
            }
        } else {
            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                text: i18n.t(`alerts.activeElement`)
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {visibility} = prevProps.modalElement;
        if (visibility && visibility !== this.props.modalElement.visibility) {
            this.setState({checkMarkerAccess: true})
        }

    }

    foundObj = (target) => {
        if (this.state.checkMarkerAccess) {
            // remove from the target "_" and everything after it
            target = target.slice(0, target.indexOf('_'));

            const {collected_elements} = this.props.game;
            let userElementsCount = 0;

            const targetElement = collected_elements.filter((element) => {
                userElementsCount += element.device_id === _getDeviceId();
                return element.name === target && element.device_id === _getDeviceId()
            })[0];

            if (collected_elements.length === 4) {
                if (targetElement) {
                    if (targetElement.correct) {
                        this.props.makeAction(SHOW_MESSAGE_POPUP, {
                            text: i18n.t(`alerts.element_already_attached`),
                            callback: this.pressOk
                        });
                    } else {
                        if (targetElement.active) {
                            this.props.makeAction(
                                SHOW_QUESTION_POPUP,
                                {
                                    text: i18n.t(`modals.attachQuestion`, {name: i18n.t(`words.${target}`)}),
                                    image: markersData.MirabellGarden[target].markers[`${target}_1`].source,
                                    callback: () => {
                                        this.props.makeAction(CORRECT_ELEMENT_REQUEST, {
                                            id: targetElement.id,
                                            callback: (responseData) => {
                                                this.correctElementCallback(responseData, target)
                                            }
                                        })
                                    }
                                });

                        } else {
                            this.props.makeAction(SHOW_MESSAGE_POPUP, {
                                text: i18n.t(`alerts.element_is_not_active`, {name: i18n.t(`words.${target}`)})
                            });
                        }
                    }

                } else {
                    this.props.makeAction(SHOW_MESSAGE_POPUP, {
                        text: i18n.t(`alerts.element_not_in_backpack`),
                        callback: this.pressOk
                    });
                }
            } else {
                this.props.makeAction(SHOW_MESSAGE_POPUP, {
                    text: i18n.t(`alerts.unfilled_elements`),
                    callback: this.pressOk
                });
            }

        }

        this.setState({checkMarkerAccess: false});
    };

    correctElementCallback = (responseData, target) => {
        const element = data.elements[target];
        if (responseData['success']) {
            if (responseData.count > 0) {
                this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'attach', count: responseData.count});
            } else {
            }
        } else {
            this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'attach'});
            // Alert.alert( null, i18n.t('alerts.unfilled_elements') )
        }
    };

    pressOk = () => {
        this.setState({checkMarkerAccess: true})
    };


    render() {
        const markers = markersData.MirabellGarden[this.activeElement?.name]?.markers;
        const {checkMarkerAccess} = this.state;

        return (
            <>
                {
                    Object.entries(markers || []).map(([key]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => {
                            this.foundObj(key)
                        }}/>
                    ))
                }
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    element: state.gameReducer.element,
    oriented: state.screenReducer.oriented,
    modalElement: state.modalReducer.modalElement,
    createdTargets: state.mainReducer.createdTargets,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MirabellGarden);
