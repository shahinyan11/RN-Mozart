import {CHANGE_SCREEN_ORIENTATION} from '../../actionsTypes'
import {isPortrait} from "../../services/helpers";

const initialState = {
    isPortrait: isPortrait(),
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_SCREEN_ORIENTATION: {

            const {isPortrait} = action.payload;
            return {
                ...state,
                isPortrait,
            }
        }

        default: {
            return state;
        }
    }
}
