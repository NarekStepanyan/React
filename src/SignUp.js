import {Component} from "react";

class SignUp extends Component{
    constructor(p) {
        super(p);
        this.state= '';
    }

    changeHandler = e => this.setState({
        [e.target.name]: e.target.value,
    });

    signing = e => {
        e.preventDefault();
        fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                this.state
            )
        });
       
    }



    render() {
        console.log(this.state);

        return (
            <form onSubmit={this.signing}>
                <h1>Sign Up</h1>
                <input type='text' placeholder='First name' name='fname' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' placeholder='Last name' name='lname' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' placeholder='Country' name='country' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='text' placeholder='email or phone number' name='email' onChange={this.changeHandler}/>
                <br /> <br />
                <input type='password' placeholder='password' name='pass' onChange={this.changeHandler}/>
                <br /> <br />
                <button type='submit' value='Sign Up' className='button'>Sign Up</button>
            </form>
        );
    }
}

export default  SignUp;