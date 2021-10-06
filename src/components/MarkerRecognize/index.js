import React, {Component} from 'react';
import {connect} from "react-redux";
import { useSelector } from 'react-redux'
import {ViroARScene} from '@viro-community/react-viro';

import Cup from "./Cup";
import Papageno from "./Papageno";
import MozartHouse from "./MozartHouse";
import {makeAction} from "../../makeAction";
import ZumZirkelwirt from "./ZumZirkelwirt";
import MirabellGarden from "./MirabellGarden";
import MozartMonument from "./MozartMonument";
import MozartBirthplace from "./MozartBirthplace";
import Kapuzinerkloster from "./Kapuzinerkloster";
import LinzerGasseStart from "./LinzerGasseStart";
import RecognizeParacelsus from "./RecognizeParacelsus";

const MarkerRecognize = ({navigation, video, callBack}) => {
    const store = useSelector(state => state);
    const {game, stageForCamera} = store.gameReducer;

    return (
        <ViroARScene>
            {
                (stageForCamera || game.stage) === 1 ?
                    <LinzerGasseStart navigation={navigation} callBack={callBack}/>
                    : game.stage === 3 ?
                    <Cup navigation={navigation}/>
                    : (stageForCamera || game.stage) === 4 ?
                        <MozartHouse navigation={navigation}/>
                        : game.stage === 7 ?
                            <MirabellGarden navigation={navigation}/>
                            : (stageForCamera || game.stage) === 9 ?
                                <MozartBirthplace navigation={navigation}/>
                                : (stageForCamera || game.stage) === 11 ?
                                    <ZumZirkelwirt navigation={navigation}/>
                                    : game.stage === 12 ?
                                        <Papageno navigation={navigation}/>
                                        : (stageForCamera || game.stage) === 15 ?
                                            <Kapuzinerkloster navigation={navigation}/>
                                            : (stageForCamera || game.stage) === 16 ?
                                                <MozartMonument navigation={navigation}/>
                                                :
                                                <RecognizeParacelsus navigation={navigation} video={video}/>
            }
        </ViroARScene>
    )

};

export default MarkerRecognize;
