import { Formik, Form, Field, ErrorMessage } from 'formik'
import { boolean, object, string } from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>
      
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
              <label htmlFor='firstname'>Firstname</label>
              <Field name='firstname' type='text' />
              <ErrorMessage  name='firstname' component='span' />

              <label htmlFor='lastname'>Lastname</label>
              <Field name='lastname' type='text'/>
              <ErrorMessage  name='lastname' component='span' />

              <label htmlFor='email'>Email</label>
              <Field name='email' type='email'/>
              <ErrorMessage  name='email' component='span'/>

              <label htmlFor='jobType'>Job Type</label>
              <Field name='jobType' as='select'>
                <option value="">Pick one</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It-senior</option>
                <option value="it-junior">It-junior</option>
              </Field>
              <ErrorMessage  name='jobType' component='span'/>

              <label>
                <Field name='terms' type='checkbox'/>
                Terms and conditions
              </label>
              <ErrorMessage  name='terms' component='span'/>

              <button type="submit">register</button>
            </Form>

          )
        }
      </Formik>
      
      
      
    </div>
  )
}
