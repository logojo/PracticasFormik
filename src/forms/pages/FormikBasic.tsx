import { useFormik, FormikErrors } from 'formik'

import '../styles/styles.css';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export const FormikBasic = () => {

  const validate = ( values: FormValues ) => {
      const errors : FormikErrors<FormValues> = {};

      if( !values.firstname ){
        errors.firstname = 'Required';
      }else if( values.firstname.length > 15 ){
        errors.firstname = 'Must be 15 characters or less';
      }

      if( !values.lastname ){
        errors.lastname = 'Required';
      }else if( values.lastname.length > 10 ){
        errors.lastname = 'Must be 10 characters or less';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
  }

  const {handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: ''
    },
    onSubmit: ( values ) => {
      console.log(values );
    },
    validate
  });

  return (
    <div>
      <h1>Formik basic</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>Firstname</label>
        <input
           type='text'
           name='firstname'
           onChange={ handleChange }
           onBlur={ handleBlur }
           value={ values.firstname }
        />
        {
          touched.firstname && errors.firstname &&
          <span><small>{ errors.firstname }</small></span>
        }

        <label htmlFor='lastname'>Lastname</label>
        <input
          type='text'
          name='lastname'
          onBlur={ handleBlur }
          onChange={ handleChange }
          value={ values.lastname }
        />
        {
          touched.lastname && errors.lastname &&
          <span><small>{ errors.lastname }</small></span>
        }

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          onBlur={ handleBlur }
          onChange={ handleChange }
          value={ values.email }
        />
        {
         touched.email &&  errors.email &&
          <span><small>{ errors.email }</small></span>
        }

        <button type="submit">register</button>
      </form>
    </div>
  )
}
