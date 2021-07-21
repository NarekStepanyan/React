import {UsersListTypes} from "../actionTypes";

const INITIAL_STATE_LIST = [];

export const usersListReducer = (state= INITIAL_STATE_LIST, action) => {
    switch (action.type) {
        case UsersListTypes.GET_ALL_USERS:
            return [...state, ...action.payload];

        default: return state;
    }
};