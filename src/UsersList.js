
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import {URL} from "./App";
import  "./App.css";


const UsersList = () => {
   
    let dispatch = useDispatch()

    useEffect( fetch({URL})
    .then(res => res.json())
    .then(data => dispatch(() => {
        type:  UsersListTypes.GET_ALL_USERS,
        payload: data
    })), [])
    
        let currentUserId = localStorage.getItem("id");
        
        let usersList = Object.values(this.state)
        .filter(item => item.id.toString() !== currentUserId)
        .map((obj, id) => <tr key={id.toString()}><td>{obj.first_name}</td><td>{obj.last_name}</td></tr>);
        
        return (
           <table><tbody className="ulist">{usersList}</tbody></table>
    );
    
}

export default UsersList;