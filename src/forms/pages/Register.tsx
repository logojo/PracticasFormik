import { FormEvent } from 'react';

import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { User } from '../interfaces/users';

const initialState : User = {
    name: '',
    email: '',
    password: '',
    confirm: ''
}

export const Register = () => {
  const {formData, name, email, password, confirm, handleChange, resetForm, isValidEmail} = useForm<User>(initialState);

 
  const onSubmit = ( event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
        <h1>Register Page</h1>

        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={ handleChange }
                className={`${ name.trim().length <= 0 && 'has-error'}`}
            />
            {
                name.trim().length <= 0  &&
                <span><small>Este campo es requerido</small></span>
            }

            <input 
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={ handleChange }
                className={`${ !isValidEmail(email) && 'has-error'}`}
            />
            {
                !isValidEmail(email)  &&
                <span><small>El mail no es valido</small></span>
            }

            <input 
                type="password"
                placeholder="Password"
                name='password'
                value={password}
                onChange={ handleChange }
                className={`${ password.trim().length <= 0 && 'has-error'}`}
            />
             {
                password.trim().length <= 0  &&
                <span><small>Este campo es requerido</small></span>
             }
             {
                ( password.trim().length < 6  && password.trim().length > 0 )  &&
                <span><small>La contrasela debe ser mayor a 6 caracteres</small></span>
             }

            <input 
                type="password"
                placeholder="Confirm"
                name='confirm'
                value={confirm}
                onChange={ handleChange }
                className={`${ confirm.trim().length <= 0 && 'has-error'}`}
            />
             {
                confirm.trim().length <= 0  &&
                <span><small>Este campo es requerido</small></span>
             } 
             {
                confirm.trim().length > 0  && password !== confirm  &&
                <span><small>Las contraseñas deben de ser iguales</small></span>
             } 

            <button type="submit">register</button>
            <button type="button" onClick={ resetForm}>reset</button>
        </form>
    </div>
  )
}
