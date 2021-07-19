
import {Component} from "react";
import {connect} from "react-redux";
import  "./App.css";
import {URL} from "./App";
import {UsersListTypes} from "./actionTypes";

class UsersList extends Component{
    componentDidMount() {
        fetch({URL})
            .then(res => res.json())
            .then(data =>    this.props.dispatch({
                type: UsersListTypes.GET_ALL_USERS,
                payload: data
            }))

    }
    
    render() {

        let currentUserId = localStorage.getItem("id");
        
        let usersList = this.props.users
        .filter(item => item.id.toString() !== currentUserId)
        .map((obj, id) => <tr key={id.toString()}><td>{obj.first_name}</td><td>{obj.last_name}</td></tr>);

        return (
           <table><tbody className="ulist">{usersList}</tbody></table>
    );
    }
}


const mapStateToProps = (state) => {
    return {
        users : state
    }
}


export default  connect(mapStateToProps)(UsersList);