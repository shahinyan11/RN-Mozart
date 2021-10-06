import data from "../../services/data";
import {
    BLOCK_QR_APPEARING,
    BLOCK_ELEMENT_APPEARING,
    CHANGE_LANGUAGE,
    GET_RANKING_LIST_REQUEST_SUCCESS, ADD_TEAME_NAME_REQUEST_SUCCESS, ADD_CREATED_TARGETS
} from '../../actionsTypes'
import { getInitLang } from "../../services/helpers";

const initialState = {
    followingCoords: data.followingCoords,
    language:  getInitLang(),
    rankingList: [],
    createdTargets: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case  BLOCK_QR_APPEARING:
        case  BLOCK_ELEMENT_APPEARING: {
            const {followingId} = action.payload.data;
            const {followingCoords} = state;
            followingCoords.map((value)=>{
                if(value.id === followingId ){
                    value.appearing = false
                }
                return value
            });
            return {
                ...state,
                followingCoords: [...followingCoords],
            }
        }

        case CHANGE_LANGUAGE: {
            const {language} = action.payload.data;
            return {
                ...state,
                language
            }
        }

        case ADD_TEAME_NAME_REQUEST_SUCCESS:
        case GET_RANKING_LIST_REQUEST_SUCCESS: {
            const {list} = action.payload;
            return {
                ...state,
                rankingList: list
            }
        }
        case ADD_CREATED_TARGETS: {
            const {id} = action.payload;
            return {
                ...state,
                createdTargets: [...state.createdTargets, id]
            }
        }

        default: {
            return state;
        }
    }
}
