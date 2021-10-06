import { MAKE_CAMERA_VISIBLE, MAKE_CAMERA_INVISIBLE } from '../../actionsTypes'

const initialState = {
    cameraVisibility: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case MAKE_CAMERA_VISIBLE: {
            return {
                ...state,
                cameraVisibility: true
            }
        }
        case MAKE_CAMERA_INVISIBLE: {
            return {
                ...state,
                cameraVisibility: false
            }
        }

        default: {
            return state;
        }
    }
}
