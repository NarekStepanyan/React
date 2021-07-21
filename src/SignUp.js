import {useState} from "react";
import {URL} from "./App";

const SignUp = () => {
  
        const [first_name, setFirst_name] = useState("");
        const [last_name, setLast_name] = useState("");    
        const [email, setEmail] = useState("");   
        const [password, setPassword] = useState(""); 

    signing = e => {

       const body = JSON.stringify({
           first_name,
           last_name,
           email,
           password
       });

        e.preventDefault();

        fetch({URL}, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          body,
        })  
        
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPassword("");
    }
        return (
            <form onSubmit={signing}>
                <h1>Sign Up</h1>
                <input type='text' value={first_name} placeholder='First name' name='fname' onChange={setFirst_name(e.target.value)} />
                <br /> <br />
                <input type='text' value={last_name} placeholder='Last name' name='lname' onChange={setLast_name(e.target.value)}/>
                <br /> <br />
                <input type='text' value={email} placeholder='email or phone number' name='email' onChange={setEmail(e.target.value)}/>
                <br /> <br />
                <input type='password' value={password} placeholder='password' name='password' onChange={setPassword(e.target.value)}/>
                <br /> <br />
                <button type='submit' value='Sign Up' className='button'>Sign Up</button>
            </form>
        );
    
}

export default  SignUp;