import { useFormik } from 'formik'
import { object, string } from 'yup';

import '../styles/styles.css';

export const FormikYup = () => {

  const  validationSchema = object({
    firstname: string().max(15, 'debe ser menos de 15 caracteres').required(),
    lastname: string().max(10).required(),
    email: string().required().email(),
  });

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: ''
    },
    onSubmit: ( values ) => {
      console.log(values );
    },
    validationSchema
  });

  return (
    <div>
      <h1>Formik yup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>Firstname</label>
        <input
           type='text'
          //  name='firstname'
          //  onChange={ handleChange }
          //  onBlur={ handleBlur }
          //  value={ values.firstname }
          { ...getFieldProps('firstname') } // el getFieldProps establece el valor de todas esas funciones
        />
        {
          touched.firstname && errors.firstname &&
          <span><small>{ errors.firstname }</small></span>
        }

        <label htmlFor='lastname'>Lastname</label>
        <input
          type='text'
          { ...getFieldProps('lastname') }
        />
        {
          touched.lastname && errors.lastname &&
          <span><small>{ errors.lastname }</small></span>
        }

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          { ...getFieldProps('email') }
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
