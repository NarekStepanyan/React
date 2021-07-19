import {Component} from "react";
import  "./App.css";
import {useState} from 'react';
import {URL} from "./App";

const LogIn = () => {
    const [email, setEmail] = useState('')

    change = e => this.setState({
        [e.target.name]: e.target.value,
    });

    logging = e => {
        e.preventDefault()
        fetch(`${URL}?email=${this.state.email}&pass=${this.state.password}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('id', data[0].id)
                this.props.history.push('/userslist');
            })
            .catch(err => alert('invalid username or password'))


    }

        return (
           <form onSubmit={this.logging}>
               <h1>Log In</h1>
               <input name='email' value={this.state.email} type='text' placeholder='email or phone number' onChange={this.change}/>
               <br /> <br />
               <input name='password' value={this.state.password} type='password' placeholder='password' onChange={this.change}/>
               <br /> <br />
               <input type='submit' value='Log In' className='button'/>
           </form>
        );
}

export default  withRouter(LogIn);