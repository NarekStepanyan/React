import {Component} from "react";
import  "./App.css";

class LogIn extends Component{
    render() {
        return (
           <form>
               <h1>Log In</h1>
               <input type='text' placeholder='email or phone number' />
               <br /> <br />
               <input type='password' placeholder='password' />
               <br /> <br />
               <input type='submit' value='Log In' className='button'/>
           </form>
        );
    }
}

export default  LogIn;