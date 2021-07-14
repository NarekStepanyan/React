import {Component} from "react";

class SignUp extends Component{
    constructor(p) {
        super(p);
        this.state= { 
            fname: '',
            lname: '',
            country: '',
            email: '',
            pass: ''
        }
    }

    changeHandler = e => this.setState({
        [e.target.name]: e.target.value,
    });

    signing = e => {

       const body = JSON.stringify({
           fname: this.state.fname,
           lname: this.state.lname,
           country: this.state.country,
           email: this.state.email,
           pass: this.state.pass
       });

        e.preventDefault();
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          body,
        })

        this.setState({ 
            fname: '',
            lname: '',
            country: '',
            email: '',
            pass: ''
        })
    }



    render() {

        return (
            <form onSubmit={this.signing}>
                <h1>Sign Up</h1>
                <input type='text' value={this.state.fname} placeholder='First name' name='fname' onChange={this.changeHandler} />
                <br /> <br />
                <input type='text' value={this.state.lname} placeholder='Last name' name='lname' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' value={this.state.country} placeholder='Country' name='country' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' value={this.state.email} placeholder='email or phone number' name='email' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='password' value={this.state.pass} placeholder='password' name='pass' onChange={this.changeHandler}/>
                <br /> <br />
                <button type='submit' value='Sign Up' className='button'>Sign Up</button>
            </form>
        );
    }
}

export default  SignUp;