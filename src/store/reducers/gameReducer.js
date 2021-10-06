import {
    NEW_JOIN,
    GAME_WIN,
    GAME_OVER,
    SOW_MOZART,
    START_GAME,
    SOW_ELEMENT,
    SOW_QR_CODE,
    HIDE_MOZART,
    HIDE_ELEMENT,
    TAKE_ELEMENT,
    HIDE_QR_CODE,
    RIDDLE_SOLVED,
    BLOCK_QR_APPEARING,
    MAKE_CAMERA_VISIBLE,
    BLOCK_ELEMENT_APPEARING,
    GAME_WIN_REQUEST_SUCCESS,
    START_GAME_REQUEST_SUCCESS,
    TAKE_ELEMENT_REQUEST_SUCCESS,
    CUP_ACTIVATE_REQUEST_SUCCESS,
    JOIN_TO_GAME_REQUEST_SUCCESS,
    RIDDLE_SOLVED_REQUEST_SUCCESS,
    CORRECT_ELEMENT_REQUEST_SUCCESS,
    ELEMENT_ACTIVATE_REQUEST_SUCCESS,
    REMOVE_USER_JOINS_REQUEST_SUCCESS,
    UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
    GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
    PAUSE_GAME_REQUEST_SUCCESS,
    CONTINUE_GAME_REQUEST_SUCCESS,
    FINISH_GAME_REQUEST_SUCCESS,
    FINISH_GAME,
    SET_GAME_MODE_REQUEST,
    SET_GAME_MODE_REQUEST_SUCCESS,
} from "../../actionsTypes";

const initialState = {
    game: null,
    gameMembers: [],
    QRCodeData: null,
    element: null,
    visibilityMozart: false,
    stageForCamera: null,
    // currentLocation: {latitude: 0, longitude: 0}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case REMOVE_USER_JOINS_REQUEST_SUCCESS: // TEST
        case JOIN_TO_GAME_REQUEST_SUCCESS:
        case START_GAME_REQUEST_SUCCESS:
        case GET_USER_ACTIVE_GAME_REQUEST_SUCCESS: {
            const {game} = action.payload;
            // !game.collected_elements ? game.collected_elements = [] : null;
            return {
                ...state,
                game,
            }
        }
        case SET_GAME_MODE_REQUEST_SUCCESS:{
            const {game} = action.payload;
            // !game.collected_elements ? game.collected_elements = [] : null;
            return {
                ...state,
                game: {...state.game, ...game},
            }
        }


        case START_GAME:
        case RIDDLE_SOLVED:
        case UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS:
        case RIDDLE_SOLVED_REQUEST_SUCCESS: {
            const {game} = action.payload;
            game.stage = +game.stage; // game.stage type should be number
            let data = {...state.game, ...game};

            return {
                ...state,
                game: data,
                visibilityMozart: game.stage === 2
            }
        }

        case CUP_ACTIVATE_REQUEST_SUCCESS: {
            const {game} = state;
            game.game_members = action.payload.game_members;

            return {
                ...state,
                game: {...game},
            }
        }

        case ELEMENT_ACTIVATE_REQUEST_SUCCESS: {
            const {game} = state;
            game.collected_elements = action.payload.collected_elements;

            return {
                ...state,
                game: {...game},
            }
        }

        case TAKE_ELEMENT_REQUEST_SUCCESS: {
            const {element} = action.payload;
            const {game} = state;
            game.collected_elements.push(element);
            return {
                ...state,
                game: {...game},
                element: null,
                QRCodeData: null
            }
        }

        case CORRECT_ELEMENT_REQUEST_SUCCESS: {
            const {element, count} = action.payload;
            const game = {...state.game};
            game.collected_elements = game.collected_elements.map((value) => {
                return value.id === element.id ? element : value
            });
            if (count === 0) {
                game.stage += 1;
            }

            return {
                ...state,
                game: {...game},
            }
        }

        case NEW_JOIN: {
            const {game} = state;
            const {data} = action.payload;
            game.game_members.push(data);
            return {
                ...state,
                game: {...game}
            }
        }

        case TAKE_ELEMENT: {
            const {data} = action.payload;
            let {game} = state;
            game.collected_elements.push(data.element);

            return {
                ...state,
                game: {...game}
            }
        }

        case PAUSE_GAME_REQUEST_SUCCESS: {
            const {game} = action.payload;
            return {
                ...state,
                game: {
                    ...state.game,
                    status: 'paused',
                    time_spent: game.time_spent
                },
            }
        }
        case CONTINUE_GAME_REQUEST_SUCCESS: {
            const {game} = action.payload;
            return {
                ...state,
                game: {
                    ...state.game,
                    status: 'inProgress',
                    start_date: game.start_date
                },
            }
        }

        case FINISH_GAME :
        case FINISH_GAME_REQUEST_SUCCESS: {
            return {
                ...state,
                game: null
            }
        }

        case GAME_WIN:
        case GAME_WIN_REQUEST_SUCCESS: {
            let {game} = state;
            game.status = 'finale';
            return {
                ...state,
                game: {...game},
                QRCodeData: null
            }
        }

        // case GAME_WIN:
        // case GAME_WIN_REQUEST_SUCCESS: {
        //     let {game} = state;
        //     game.status = 'finished';
        //     return {
        //         ...state,
        //         game: {...game},
        //         QRCodeData: null
        //     }
        // }

        case SOW_QR_CODE: {
            const {data} = action.payload;
            return {
                ...state,
                QRCodeData: {...data}
            }
        }

        case SOW_MOZART: {
            return {
                ...state,
                visibilityMozart: true
            }
        }

        case HIDE_MOZART: {
            return {
                ...state,
                visibilityMozart: false
            }
        }

        case BLOCK_QR_APPEARING:
        case HIDE_QR_CODE: {
            return {
                ...state,
                QRCodeData: null
            }
        }

        case SOW_ELEMENT: {
            const {data} = action.payload;
            return {
                ...state,
                element: {...data}
            }
        }

        case BLOCK_ELEMENT_APPEARING:
        case HIDE_ELEMENT: {
            return {
                ...state,
                element: null
            }
        }

        case MAKE_CAMERA_VISIBLE: {
            const {game} = state;

            return {
                ...state,
                stageForCamera: game?.stage
            }
        }

        default: {
            return state;
        }
    }
}
