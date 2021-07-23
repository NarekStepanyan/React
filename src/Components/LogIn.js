import  "../App.css";
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom';
import {URL} from "./App";

const LogIn = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().password('Invalid password').required('Required'),
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

   let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`${URL}?email=${formik.values.email}&password=${formik.values.password}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('id', data[0].id);
                history.push('/userslist');
            })
            .catch(err => alert('invalid username or password'))
    }

        return (
           <form onSubmit={formik.handleSubmit}>
               <h1>Log In</h1>
               <input id="email"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}/>

               {formik.errors.email ?
                   <div>{formik.errors.email}</div> : null}

               <br /> <br />
               <input id="password"
                      name="password"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.password}/>

               {formik.errors.password ?
                   <div>{formik.errors.password}</div> : null}
               <br /> <br />
               <input type='submit' value='Log In' className='button'/>
           </form>
        );

    }



export default  LogIn;