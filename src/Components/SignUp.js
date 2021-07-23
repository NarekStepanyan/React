import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignUp = () => {

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }
    const validationSchema = Yup.object({
        first_Name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        last_Name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
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

        return (
            <form onSubmit={formik.handleSubmit}>
                <h1>Sign Up</h1>
                <input type='text' id="first_name"
                       name="first_name"
                       onChange={formik.handleChange}
                       value={formik.values.first_name} />

                {formik.errors.first_name ?
                    <div>{formik.errors.first_name}</div> : null}

                <br /> <br />
                <input id="last_name"
                       name="last_name"
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.last_name}/>

                {formik.errors.last_name ?
                    <div>{formik.errors.last_name}</div> : null}

                <br /> <br />
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
                <button type='submit' value='Sign Up' className='button'>Sign Up</button>
            </form>
        );
    
}

export default  SignUp;