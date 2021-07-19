import "./actionTypes";
import  {combineReducers} from "redux";
import {UserProfileTypes, UsersListTypes} from "./actionTypes";
import UsersList from "./UsersList";

const INITIAL_STATE_PROFILE = {};

const userProfileReducer = (state= INITIAL_STATE_PROFILE, action) => {
    switch (action.type) {
        case UserProfileTypes.GET_USER:
            return action.payload;

        default: return state;
    }
};

const INITIAL_STATE_LIST = [];

const usersListReducer = (state= INITIAL_STATE_LIST, action) => {
    switch (action.type) {
        case UsersListTypes.GET_ALL_USERS:
            return [...state, ...action.payload];

        default: return state;
    }
};

export const rootReducer = combineReducers({
    profile: userProfileReducer,
    usersList: usersListReducer
});
