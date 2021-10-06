import React, {Component} from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import ProgressBar from "../../components/ProgressBar";
import BottomMenu from "../../components/BottomMenu";
import data from "../../services/data";
import {colors} from "../../services/styles";
import {styles} from './styles'
import MapViewDirections from "react-native-maps-directions";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {Prev} from '../../assets/svgs';
import {request} from "react-native-permissions";
import permissions from "../../services/permissions";
import RefreshView from "../../components/RefreshView";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationAccess: false,
            showLocation: false,
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            },
            mode: 'WALKING'
        }
    }

    componentWillMount(){
        request(permissions.location_in_use).then((status) => {
            if (status === 'granted') {
                this.setState({locationAccess: true})
            }
        });

        Geolocation.getCurrentPosition((data) => {
            this.setState({
                region: {
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            })
        });
    };

    render() {
        const {game} = this.props;
        const {mode, locationAccess, region} = this.state;
        const coordinates = data.coordinates[`stage_${game.stage}`];
        const showRoad = +game.stage === 15;
        return (
            <RefreshView>
                <View style={styles.container}>
                    <LinearGradient style={styles.col_1}
                                    colors={[ "rgba(36, 25, 32, 0.75)", '#241920']}
                                    useAngle={true}
                                    angle={315}
                    >
                        <ProgressBar navigation={this.props.navigation}/>
                        <View style={styles.titleContain}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.touchBack}
                            >
                                <Prev fill={colors.blue}/>
                            </TouchableOpacity>

                            <Image source={require('../../assets/images/np-map.png')} style={styles.mapIcon}/>
                            <Text style={styles.mainTitle}>KARTE</Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.col_2}>
                        <MapView
                            style={styles.map}
                            customMapStyle={data.mapStyle}
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            showsUserLocation={locationAccess && showRoad}
                            region={region}
                        >
                            {
                                coordinates.map((cord, index) => {
                                    if (game.stage !== 8 || game.stage !== 14) {
                                        return (
                                            <>
                                                <MapView.Marker coordinate={cord.location}>
                                                    {game.stage === 5 ?
                                                        <Image source={require('../../assets/images/mapMarker.png')}
                                                               style={{width: 20, height: 20}}/> : null}
                                                </MapView.Marker>
                                                {
                                                    showRoad ?
                                                        cord.destinations.map((value, index)=>(
                                                            <MapViewDirections
                                                                origin={index === 0 ? {latitude: region.latitude, longitude: region.longitude} : cord.destinations[index - 1] }
                                                                destination={value}
                                                                apikey={'your_api_key'}
                                                                mode={mode}
                                                                strokeWidth={3.5}
                                                                lineDashPattern={[10, 10]}
                                                                strokeColor="hotpink"
                                                            />
                                                        ))
                                                        :null
                                                }

                                            </>
                                        )
                                    }
                                })
                            }

                        </MapView>
                    </View>
                    <View style={styles.col_3}>
                        <BottomMenu
                            screenId={4}
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)
