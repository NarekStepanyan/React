import {Component} from "react";

class SignUp extends Component{
    constructor(p) {
        super(p);
        this.state= { 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    changeHandler = e => this.setState({
        [e.target.name]: e.target.value,
    });

    signing = e => {

       const body = JSON.stringify({
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           email: this.state.email,
           password: this.state.password
       });

        e.preventDefault();
        fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          body,
        })

        this.setState({ 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        })
    }



    render() {

        return (
            <form onSubmit={this.signing}>
                <h1>Sign Up</h1>
                <input type='text' value={this.state.first_name} placeholder='First name' name='fname' onChange={this.changeHandler} />
                <br /> <br />
                <input type='text' value={this.state.last_name} placeholder='Last name' name='lname' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' value={this.state.email} placeholder='email or phone number' name='email' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='password' value={this.state.password} placeholder='password' name='pass' onChange={this.changeHandler}/>
                <br /> <br />
                <button type='submit' value='Sign Up' className='button'>Sign Up</button>
            </form>
        );
    }
}

export default  SignUp;