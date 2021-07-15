
import {Component} from "react";
import  "./App.css";

class UsersList extends Component{
    constructor(p) {
        super(p);
        this.state= {};
    }

    componentDidMount() {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(json => this.setState(json))
    }
    
    render() {

        let currentUserId = localStorage.getItem("id");
        
        let usersList = Object.values(this.state)
        .filter(item => item.id.toString() !== currentUserId)
        .map((obj, id) => <tr key={id.toString()}><td>{obj.fname}</td><td>{obj.lname}</td><td>from  {obj.country}</td></tr>);
        
        return (
           <table><tbody className="ulist">{usersList}</tbody></table>
    );
    }
}

export default  UsersList;