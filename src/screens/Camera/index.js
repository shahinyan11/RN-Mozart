import React, {Component} from 'react'
import {connect} from "react-redux";
import RefreshView from "../../components/RefreshView";
import CameraAr from "../CameraAr";
import QRscaner from "../QRscaner";
import {makeAction} from "../../makeAction";

class Camera extends Component {

    render() {
        const {navigation, cameraVisibility, route} = this.props;
        const {type} = route.params;
        const video = route.params?.video;

        return (
            <RefreshView>
                {
                     type === 'qr' && cameraVisibility ?
                        <QRscaner navigation={navigation}/>
                        :  type !== 'qr' && cameraVisibility ?
                        <CameraAr navigation={navigation} video={video}/>
                        : null
                }
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    screenLoader: state.loaderReducer.screenLoader,
    language: state.mainReducer.language,
    cameraVisibility: state.visibilityReducer.cameraVisibility,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Camera);
