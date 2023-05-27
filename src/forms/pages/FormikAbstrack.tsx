import { Formik, Form } from 'formik'
import { boolean, object, string } from 'yup';

import { CheckInput, SelectControl, TextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstrack = () => {

  return (
    <div>
      <h1>Formik Abstractation</h1>
      
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ (values) => {
          console.log( values );
          
        }}
        validationSchema = { 
          object({
            firstname: string().max(15, 'debe ser menos de 15 caracteres').required(),
            lastname: string().max(10).required(),
            email: string().required().email(),
            terms: boolean().oneOf([true], 'debe de aceptar las condiciones'),
            jobType: string().required('requerido').notOneOf(['it-junior'], 'la opcion no es permitida')
          })
        }
      >
        {
          (formik) => (
            <Form>

              <TextInput label="Firstname" name='firstname' placeholder='FirstName' />
              <TextInput label="Lastname" name='lastname' placeholder='LastName' />
              <TextInput label="Email" name='email' placeholder='Email' type='email' />

              <SelectControl label='Job Type' name='jobType'>
                <option value="">Pick one</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It-senior</option>
                <option value="it-junior">It-junior</option>
              </SelectControl>

              <CheckInput label="Terms and conditions" name='terms' />

              <button type="submit">register</button>
            </Form>

          )
        }
      </Formik>
      
      
      
    </div>
  )
}
