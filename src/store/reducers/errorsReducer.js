import {
    JOIN_TO_GAME_REQUEST_FAIL,
    SET_ERROR
} from '../../actionsTypes'

const INITIAL_STATE = {
    errorMessage: ''
};

export default (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_ERROR:
        case JOIN_TO_GAME_REQUEST_FAIL:
            const {message} = action.payload;
            return {
                errorMessage: message
            };
        default: return state
    }
}
