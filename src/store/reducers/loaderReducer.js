import {
    SET_SCREEN_LOADER_VISIBLE,

    JOIN_TO_GAME_REQUEST,
    JOIN_TO_GAME_REQUEST_SUCCESS,
    JOIN_TO_GAME_REQUEST_FAIL,

    GET_USER_ACTIVE_GAME_REQUEST,
    GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,

    TAKE_ELEMENT_REQUEST,
    TAKE_ELEMENT_REQUEST_SUCCESS,
    TAKE_ELEMENT_REQUEST_FAIL, GET_USER_ACTIVE_GAME_REQUEST_FAIL,


} from '../../actionsTypes'

const INITIAL_STATE = {
    screenLoader: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_SCREEN_LOADER_VISIBLE: {
            return {screenLoader: action.payload.screenLoader}
        }

        case JOIN_TO_GAME_REQUEST:
        case GET_USER_ACTIVE_GAME_REQUEST:
        case TAKE_ELEMENT_REQUEST: {
            return {screenLoader: true}
        }
        case JOIN_TO_GAME_REQUEST_SUCCESS :
        case JOIN_TO_GAME_REQUEST_FAIL:
        case TAKE_ELEMENT_REQUEST_SUCCESS:
        case TAKE_ELEMENT_REQUEST_FAIL:
        case GET_USER_ACTIVE_GAME_REQUEST_FAIL:
        case GET_USER_ACTIVE_GAME_REQUEST_SUCCESS: {

            return {screenLoader: false}
        }

        default: {
            return state
        }

    }
}
