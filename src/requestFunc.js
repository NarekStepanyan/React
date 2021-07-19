import {URL} from "./App";

export function loadUsersList() {
    return (dispatch, getState) => {
        return  fetch({URL})
        .then(res => res.json())
        .then(data => dispatch(() => {
            type: GET_USERS_LIST,
            payload: data
        }))
    }
}