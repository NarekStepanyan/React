import {UserProfileTypes} from "../actionTypes";

const INITIAL_STATE_PROFILE = {};

export const userProfileReducer = (state= INITIAL_STATE_PROFILE, action) => {
    switch (action.type) {
        case UserProfileTypes.GET_USER:
            return action.payload;

        default: return state;
    }
};