import "../actionTypes";
import  {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {usersListReducer} from "./usersListReducer"
import {userProfileReducer} from "./userProfileReducer";

export const rootReducer = combineReducers({
    profile: userProfileReducer,
    usersList: usersListReducer,
    login: loginReducer
});





