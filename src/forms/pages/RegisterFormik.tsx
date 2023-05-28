
import { Formik, Form } from 'formik';
import * as Yup  from 'yup';

import { TextInput } from '../components';
import '../styles/styles.css';


export const RegisterFormik = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
         initialValues={{
            name: '',
            email: '',
            password: '',
            confirm: ''
         }}
         onSubmit={( values ) => {
            console.log( values);
         }}
         validationSchema={
            Yup.object({
                name: Yup.string().required().min(2).max(15),
                email: Yup.string().required().email(),
                password: Yup.string().required().min(6),
                confirm:  Yup.string().required().oneOf([Yup.ref('password')],'Password must match')
            })
         }
        >
           {
             ({ handleReset }) => (
                <Form>
                    <TextInput label="Name" name='name' placeholder='Name' />
                    <TextInput label="Email" name='email' placeholder='Email' />
                    <TextInput label="Password" name='password' type='password' placeholder='Password' />
                    <TextInput label="Confirm" name='confirm' type='password' placeholder='Confirm' />

                    <button type="submit">register</button>
                    <button type="button" onClick={ handleReset }>reset</button>
                </Form>
             )
           }
        </Formik>
    </div>

  )
}
