import {RequestTypes} from "../actionTypes"

const init_state = {
    loading : true,
    success : false,
    failure : true
}

export function loginReducer(state = init_state, action){
    switch (action.type){
        case RequestTypes.REQ_SUCCESS:
            return {
                ...state,
                loading : false,
                success : true,
                failure : false
            }
        case RequestTypes.REQ_FAILURE:
            return {
                ...state,
                loading : false,
                success : false,
                failure : true
            }
        default: return state
    }
}