import {takeLatest, put, call} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {Vibration} from "react-native";
import {
    GET_USER_ACTIVE_GAME_REQUEST,
    GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
    GET_USER_ACTIVE_GAME_REQUEST_FAIL,

    JOIN_TO_GAME_REQUEST,
    JOIN_TO_GAME_REQUEST_SUCCESS,
    JOIN_TO_GAME_REQUEST_FAIL,

    START_GAME_REQUEST,
    START_GAME_REQUEST_SUCCESS,
    START_GAME_REQUEST_FAIL,

    RIDDLE_SOLVED_REQUEST,
    RIDDLE_SOLVED_REQUEST_SUCCESS,
    RIDDLE_SOLVED_REQUEST_FAIL,

    TAKE_ELEMENT_REQUEST,
    TAKE_ELEMENT_REQUEST_SUCCESS,
    TAKE_ELEMENT_REQUEST_FAIL,

    CORRECT_ELEMENT_REQUEST,
    CORRECT_ELEMENT_REQUEST_SUCCESS,
    CORRECT_ELEMENT_REQUEST_FAIL,

    UPDATE_LOGIC_RIDDLE_REQUEST,
    UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
    UPDATE_LOGIC_RIDDLE_REQUEST_FAIL,

    // SET_ERROR,

    REMOVE_USER_JOINS_REQUEST,
    REMOVE_USER_JOINS_REQUEST_SUCCESS,
    REMOVE_USER_JOINS_REQUEST_FAIL,

    CUP_ACTIVATE_REQUEST,
    CUP_ACTIVATE_REQUEST_SUCCESS,
    CUP_ACTIVATE_REQUEST_FAIL,

    ELEMENT_ACTIVATE_REQUEST,
    ELEMENT_ACTIVATE_REQUEST_SUCCESS,
    ELEMENT_ACTIVATE_REQUEST_FAIL,

    GAME_WIN_REQUEST,
    GAME_WIN_REQUEST_SUCCESS,
    GAME_WIN_REQUEST_FAIL,

    FINISH_GAME_REQUEST,
    FINISH_GAME_REQUEST_SUCCESS,
    FINISH_GAME_REQUEST_FAIL,

    SHOW_MESSAGE_POPUP,

    PAUSE_GAME_REQUEST,
    PAUSE_GAME_REQUEST_SUCCESS,
    PAUSE_GAME_REQUEST_FAIL,

    CONTINUE_GAME_REQUEST,
    CONTINUE_GAME_REQUEST_SUCCESS,
    CONTINUE_GAME_REQUEST_FAIL,
    GET_RANKING_LIST_REQUEST_SUCCESS,
    GET_RANKING_LIST_REQUEST_FAIL,
    GET_RANKING_LIST_REQUEST,
    ADD_TEAME_NAME_REQUEST,
    ADD_TEAME_NAME_REQUEST_FAIL,
    ADD_TEAME_NAME_REQUEST_SUCCESS,
    SHOW_POPUP_EVENT_REQUEST,
    SHOW_POPUP_EVENT_REQUEST_FAIL,
    SHOW_FLASH_MESSAGE_POPUP, SET_GAME_MODE_REQUEST,
} from "../../actionsTypes";

import * as NavigationService from "../../NavigationService"
import * as api from '../../api/api';
import {errorAlert} from "../../services/helpers";
import i18n from "../../services/i18next";


function* getUserActiveGame(action) {
    try {
        const {data} = yield call(api.getUserActiveGame, action.payload.data);
        if (data['success']) {
            yield put({
                type: GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
                payload: data
            });
        }
    } catch (e) {
        yield put({
            type: GET_USER_ACTIVE_GAME_REQUEST_FAIL,
            payload: {error: e}
        })

    }
}

function* startGame(action) {
    try {
        const {data} = yield call(api.startGame, action.payload.data);
        if (data['success']) {
            yield put({
                type: START_GAME_REQUEST_SUCCESS,
                payload: data
            });
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: START_GAME_REQUEST_FAIL,
            payload: {data}
        });
        yield errorAlert("", data.message);
    }
}

function* riddleSolved(action) {
    try {
        const {data} = yield call(api.riddleSolved, action.payload.data);
        if (data['success']) {
            yield put({
                type: RIDDLE_SOLVED_REQUEST_SUCCESS,
                payload: data
            });

            if (action.callBack) {
                action.callBack();
            }
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: RIDDLE_SOLVED_REQUEST_FAIL,
            payload: {data}
        });
        yield errorAlert("", data.message);
    }
}

function* updateLogicRiddle(action) {
    try {
        const {data} = yield call(api.updateLogicRiddle, action.payload.data);
        if (data['success']) {
            yield put({
                type: UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
                payload: data
            });
            Vibration.vibrate();

            this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, { text: i18n.t("modals.riddleSolved") });

        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: UPDATE_LOGIC_RIDDLE_REQUEST_FAIL,
            payload: {data}
        });
        yield errorAlert("", data.message);
    }
}

function* joinGame(action) {
    try {
        const {data} = yield call(api.joinGame, action.payload.data);
        if (data['success']) {

            yield put({
                type: JOIN_TO_GAME_REQUEST_SUCCESS,
                payload: data
            });



            yield action.callBack(data.game.id);
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: JOIN_TO_GAME_REQUEST_FAIL,
            payload: data
        });

        yield errorAlert("", data.error.message);
    }
}
function* gameMode(action) {
    try {
        console.log(333333333333333)
        const {data} = yield call(api.gameMode, action.payload.data);
        console.log(2222222222222, data)
        if (data['success']) {
            console.log(111111, data)

            yield put({
                type: SET_GAME_MODE_REQUEST_SUCCESS,
                payload: data,
            });

            yield action.callBack();
        }
    } catch (e) {
        const {data} = e.response;
        console.log(55555555,data)
        yield put({
            type: JOIN_TO_GAME_REQUEST_FAIL,
            payload: data
        });

        yield errorAlert("", data.error.message);
    }
}

function* takeElement(action) {
    try {
        const {data} = yield call(api.takeElement, action.payload.data);

        if (data['success']) {

            yield put({
                type: TAKE_ELEMENT_REQUEST_SUCCESS,
                payload: data
            });

            yield NavigationService.navigate('Rucksack')

        } else {

            yield put({type: TAKE_ELEMENT_REQUEST_FAIL});
            yield put({
                type: SHOW_MESSAGE_POPUP,
                payload: {
                    text: i18n.t(`alerts.${data['error']['message']}`),
                    callback: action.payload.callback
                }
            });

        }
    } catch (e) {
        const {error} = e.response.data;
        yield put({type: TAKE_ELEMENT_REQUEST_FAIL, payload: {error: e}});
        console.log(error)
    }
}

function* activateCup(action) {
    try {
        const {data} = yield call(api.activateCup, action.payload.id);
        if (data['success']) {
            yield put({
                type: CUP_ACTIVATE_REQUEST_SUCCESS,
                payload: data
            });

            Vibration.vibrate();
            this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t("notifications.cup_activated")});

        }
    } catch (e) {
        yield put({
            type: CUP_ACTIVATE_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* activateElement(action) {
    try {
        const {data} = yield call(api.activateElement, action.payload.id);
        if (data['success']) {
            yield put({
                type: ELEMENT_ACTIVATE_REQUEST_SUCCESS,
                payload: data
            });

            Vibration.vibrate();
            this.props.makeAction(SHOW_FLASH_MESSAGE_POPUP, {text: i18n.t("notifications.element_activated")});

        }
    } catch (e) {
        yield put({
            type: ELEMENT_ACTIVATE_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* correctElement(action) {
    try {

        const {data} = yield call(api.correctElement, action.payload.id);
        if (data['success']) {
            yield put({
                type: CORRECT_ELEMENT_REQUEST_SUCCESS,
                payload: data
            });
        }

        action.payload.callback(data);

    } catch (e) {
        yield put({
            type: CORRECT_ELEMENT_REQUEST_FAIL,
            payload: {error: e}
        });
        yield put({
            type: SHOW_MESSAGE_POPUP,
            payload: {
                text: 'Jemand in Ihrem Team hat dieses Element bereits',
                callback: action.payload.callback
            }
        });
    }
}

function* gameWin(action) {
    try {
        const {data} = yield call(api.gameWin, action.payload);
        if (data['success']) {
            yield put({
                type: GAME_WIN_REQUEST_SUCCESS
            });
        }
        yield action.payload.callback();

    } catch (e) {
        yield put({
            type: GAME_WIN_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* finishGame(action) {
    try {
        const {data} = yield call(api.finishGame, action.payload);
        if (data['success']) {
            yield put({
                type: FINISH_GAME_REQUEST_SUCCESS
            });
            yield NavigationService.reset("Home");
        }


    } catch (e) {
        yield put({
            type: FINISH_GAME_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* pauseGame(action) {
    try {
        const {data} = yield call(api.pauseGame, action.payload.id);
        if (data['success']) {
            yield put({
                type: PAUSE_GAME_REQUEST_SUCCESS,
                payload: data
            });
        }

    } catch (e) {
        yield put({
            type: PAUSE_GAME_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* continueGame(action) {
    try {
        const {data} = yield call(api.continueGame, action.payload.id);
        if (data['success']) {
            yield put({
                type: CONTINUE_GAME_REQUEST_SUCCESS,
                payload: data
            });
        }

    } catch (e) {
        yield put({
            type: CONTINUE_GAME_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* addTeamName(action) {
    try {
        const {data} = yield call(api.addTeamName, action.payload);
        if (data['success']) {
            yield put({
                type: ADD_TEAME_NAME_REQUEST_SUCCESS,
                payload: data
            });
        }

    } catch (e) {
        console.log(e.response);
        yield put({
            type: ADD_TEAME_NAME_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* getRankingList() {
    try {
        const {data} = yield call(api.getRankingList);
        if (data['success']) {
            yield put({
                type: GET_RANKING_LIST_REQUEST_SUCCESS,
                payload: data
            });
        }

    } catch (e) {
        yield put({
            type: GET_RANKING_LIST_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* showPopupEvent(action) {
    try {
        const {data} = yield call(api.showPopupEvent, action.payload);
        if (!data['success']) {
            console.log('showPopupEvent')
        }

    } catch (e) {
        yield put({
            type: SHOW_POPUP_EVENT_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}


//TEST
function* removeUserJoins(action) {
    try {
        const {data} = yield call(api.removeUserJoins, action.payload.data);
        if (data['success']) {
            yield put({
                type: REMOVE_USER_JOINS_REQUEST_SUCCESS,
                payload: data
            });

            yield NavigationService.reset("Home");
        }
    } catch (e) {
        yield put({
            type: REMOVE_USER_JOINS_REQUEST_FAIL,
            payload: {error: e}
        })

    }
}

export default function* watcher() {
    yield takeLatest(GET_USER_ACTIVE_GAME_REQUEST, getUserActiveGame);
    yield takeLatest(START_GAME_REQUEST, startGame);
    yield takeLatest(RIDDLE_SOLVED_REQUEST, riddleSolved);
    yield takeLatest(JOIN_TO_GAME_REQUEST, joinGame);
    yield takeLatest(SET_GAME_MODE_REQUEST, gameMode);
    yield takeLatest(TAKE_ELEMENT_REQUEST, takeElement);
    yield takeLatest(CORRECT_ELEMENT_REQUEST, correctElement);
    yield takeLatest(UPDATE_LOGIC_RIDDLE_REQUEST, updateLogicRiddle);
    yield takeLatest(CUP_ACTIVATE_REQUEST, activateCup);
    yield takeLatest(ELEMENT_ACTIVATE_REQUEST, activateElement);
    yield takeLatest(GAME_WIN_REQUEST, gameWin);
    yield takeLatest(FINISH_GAME_REQUEST, finishGame);
    yield takeLatest(PAUSE_GAME_REQUEST, pauseGame);
    yield takeLatest(CONTINUE_GAME_REQUEST, continueGame);
    yield takeLatest(GET_RANKING_LIST_REQUEST, getRankingList);
    yield takeLatest(ADD_TEAME_NAME_REQUEST, addTeamName);
    yield takeLatest(SHOW_POPUP_EVENT_REQUEST, showPopupEvent);
    //TEST
    yield takeLatest(REMOVE_USER_JOINS_REQUEST, removeUserJoins);
}
