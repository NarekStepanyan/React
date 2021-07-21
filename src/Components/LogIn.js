import {useState} from "react";
import  "../App.css";
import {useHistory} from 'react-router-dom';
import {URL} from "./App";

const LogIn = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   let history = useHistory();

    const logging = e => {
        e.preventDefault();

        fetch(`${URL}?email=${email}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('id', data[0].id);
                history.push('/userslist');
            })
            .catch(err => alert('invalid username or password'))

           setEmail("");
           setPassword("");

    }

        return (
           <form onSubmit={logging}>
               <h1>Log In</h1>
               <input name='email' value={email} type='text' placeholder='email or phone number' onChange={setEmail(e.target.value)}/>
               <br /> <br />
               <input name='password' value={password} type='password' placeholder='password' onChange={setPassword(e.target.value)}/>
               <br /> <br />
               <input type='submit' value='Log In' className='button'/>
           </form>
        );

    }



export default  LogIn;