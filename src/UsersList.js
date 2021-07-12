import {Component} from "react";

class UsersList extends Component{
    constructor(p) {
        super(p);
        this.state= '';
    }

    componentDidMount() {
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(json => this.setState(json))
    }

    render() {
        console.log(this.state);

        return (
           this.state.map(s => <tr><td>{s[fname]}</td></tr>);

        );
    }
}

export default  UsersList;