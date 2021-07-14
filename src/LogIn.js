import {Component} from "react";
import  "./App.css";
import {withRouter} from 'react-router-dom';

class LogIn extends Component{
    constructor(p) {
        super(p);
        this.state= {
            email: '',
            pass: ''
        };
    }
    change = e => this.setState({
        [e.target.name]: e.target.value,
    });

    logging = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/users?email=${this.state.email}&pass=${this.state.pass}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('id', data[0].id)
                this.props.history.push('/userslist');
            })
            .catch(err => alert('non-existent username or password'))

            this.setState({
                email: '',
                pass: ''
            })
    }

    render() {
        return (
           <form onSubmit={this.logging}>
               <h1>Log In</h1>
               <input name='email' value={this.state.email} type='text' placeholder='email or phone number' onChange={this.change}/>
               <br /> <br />
               <input name='pass' value={this.state.pass} type='password' placeholder='password' onChange={this.change}/>
               <br /> <br />
               <input type='submit' value='Log In' className='button'/>
           </form>
        );
    }
}

export default  withRouter(LogIn);