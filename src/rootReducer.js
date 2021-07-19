import "./actionTypes";

const INIT_STATE = [];

export const rootReducer = (state=INIT_STATE, action) => {
    switch(action.type) {

        case GET_USERS_LIST :
            return [...state, ...action.payload];

            default: return state;
    }
}