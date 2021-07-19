
import {Component} from "react";
import {connect} from "react-redux";
import  "./App.css";

class UsersList extends Component{
    constructor(p) {
        super(p);
        this.state= {};
    }

    componentDidMount() {

        dispatch(loadUsersList());

    }
    
    render() {

        let currentUserId = localStorage.getItem("id");
        
        let usersList = Object.values(this.state)
        .filter(item => item.id.toString() !== currentUserId)
        .map((obj, id) => <tr key={id.toString()}><td>{obj.first_name}</td><td>{obj.last_name}</td></tr>);
        
        return (
           <table><tbody className="ulist">{usersList}</tbody></table>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default  connect(mapStateToProps)(UsersList);