import {
    SHOW_MODAL_ELEMENT,
    HIDE_MODAL_ELEMENT,
    TAKE_ELEMENT_REQUEST,

    SHOW_MESSAGE_POPUP,
    HIDE_MESSAGE_POPUP,

    SHOW_MAIN_POPUP,
    HIDE_MAIN_POPUP,

    SHOW_QUESTION_POPUP,
    HIDE_QUESTION_POPUP,

    SHOW_CONTINUE_GAME_POPUP,
    HIDE_CONTINUE_GAME_POPUP,

    SHOW_FLASH_MESSAGE_POPUP,
    HIDE_FLASH_MESSAGE_POPUP

} from '../../actionsTypes'
import i18n from "../../services/i18next";

const INITIAL_STATE = {
    modalElement: {
        action: null,
        element: null,
        visibility: false
    },
    messagePopup:{
        text: '',
        callback: null,
        visibility: false
    },
    mainPopup: {
        // text: i18n.t('modals.stage_2'),
        // image: require('../../assets/images/paracelsus.jpg'),
        text: '',
        image: null,
        visibility: false,
        sendUpdateRequest: false,
        blockUpdateMessage: false,
    },
    questionPopup: {
        // text: i18n.t( `modals.attachQuestion`, {name: i18n.t(`words.air`)} ),
        // image: require('../../assets/images/markers/statueAir/air_1.jpg'),
        text: '',
        image: null,
        callback: null,
        visibility: false,
        blockRiddleUpdating: false
    },
    continueGamePopup: {
        callback: null,
        visibility: false
    },
    flashMessagePopup:{
        text: '',
        visibility: false,
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SHOW_MODAL_ELEMENT: {
            const modalElement = {
                visibility: true,
                element: action.payload.element,
                action: action.payload.action,
                count: action.payload.count,
            };
            return {
                ...state,
                modalElement
            }
        }

        case HIDE_MODAL_ELEMENT :
        case TAKE_ELEMENT_REQUEST: {
            const modalElement = {
                visibility: false,
                element: null,
                action: null
            };
            return {
                ...state,
                modalElement
            }
        }


        case SHOW_MESSAGE_POPUP: {
            const {text, callback} = action.payload;
            const messagePopup = {
                visibility: true,
                text,
                callback
            };
            return {
                ...state,
                messagePopup
            }
        }

        case HIDE_MESSAGE_POPUP: {
            const messagePopup = {
                visibility: false,
                text: ''
            };
            return {
                ...state,
                messagePopup
            }
        }

        case SHOW_FLASH_MESSAGE_POPUP: {
            const {text, type} = action.payload;
            const flashMessagePopup = {
                text,
                type,
                visibility: true,
            };
            return {
                ...state,
                flashMessagePopup
            }
        }

        case HIDE_FLASH_MESSAGE_POPUP: {
            const flashMessagePopup = {
                text: '',
                type: null,
                visibility: false
            };
            return {
                ...state,
                flashMessagePopup
            }
        }

        case SHOW_MAIN_POPUP: {
            const {text, image, sendUpdateRequest, blockUpdateMessage} = action.payload;
            const mainPopup = {
                visibility: true,
                text,
                image,
                sendUpdateRequest,
                blockUpdateMessage
            };
            return {
                ...state,
                mainPopup
            }
        }

        case HIDE_MAIN_POPUP: {
            const mainPopup = {
                visibility: false,
                text: ''
            };
            return {
                ...state,
                mainPopup
            }
        }

        case SHOW_QUESTION_POPUP: {
            const { text, type, image, callback } = action.payload;
            const questionPopup = {
                visibility: true,
                text,
                type,
                image,
                callback,
            };
            return {
                ...state,
                questionPopup
            }
        }

        case HIDE_QUESTION_POPUP: {
            const questionPopup = {
                visibility: false,
                text: ''
            };
            return {
                ...state,
                questionPopup
            }
        }
        case SHOW_CONTINUE_GAME_POPUP: {
            const {callback} = action.payload;
            const continueGamePopup = {
                visibility: true,
                callback
            };
            return {
                ...state,
                continueGamePopup
            }
        }

        case HIDE_CONTINUE_GAME_POPUP: {
            const continueGamePopup = {
                visibility: false,
            };
            return {
                ...state,
                continueGamePopup
            }
        }



        default: {
            return state
        }

    }
}
