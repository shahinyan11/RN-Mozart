import React, {Component} from 'react';
import {connect} from "react-redux";
import {_getDeviceId} from "../../services/helpers";
import {RefreshControl, ScrollView,} from 'react-native'

import {makeAction} from "../../makeAction";
import {GET_USER_ACTIVE_GAME_REQUEST} from "../../actionsTypes";


class RefreshView extends Component {

    onRefresh = () => {
        this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: _getDeviceId()}});
    };


    render() {
        const {screenLoader} = this.props;
        return (
            <ScrollView
                // refreshControl={<RefreshControl refreshing={screenLoader} onRefresh={this.onRefresh}/>}
                contentContainerStyle={{flexGrow: 1}}
            >
                {this.props.children}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RefreshView)
