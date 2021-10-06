import {combineReducers} from 'redux'
import errorsReducer from './errorsReducer'
import gameReducer from './gameReducer'
import loaderReducer from './loaderReducer'
import screenReducer from './screenReducer'
import mainReducer from './mainReducer'
import visibilityReducer from './visibilityReducer'
import modalReducer from './modalReducer'

const reducers = combineReducers({
    errorsReducer,
    mainReducer,
    gameReducer,
    loaderReducer,
    screenReducer,
    visibilityReducer,
    modalReducer
});

export default reducers;
