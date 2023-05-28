import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { SelectControl, TextInput } from '../components';
import * as Yup from 'yup';

const initialValues : {[key: string] : any } = {}
const requiredFiles : {[key: string] : any } = {}

for (const input of formJson ) {
    initialValues[input.name] = input.value;
    
    if( !input.validations) continue;

    let schema = Yup.string()
    
    for (const rule of input.validations ) {
        if( rule.type === 'required'){
            schema = schema.required();
        }
        if( rule.type === 'min'){
            schema = schema.min(( rule as any).value || 2);
        }
        if( rule.type === 'email'){
            schema = schema.email();
        }

        //otras reglas
    }
    
    requiredFiles[input.name] = schema;
}

const validationschema = Yup.object({ ...requiredFiles })

export const FormikDinamic = () => {
  return (
    <div>
        <h1>FormikDinamic</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={(values) => {
                console.log( values);
            }}
            validationSchema={ validationschema }
        >
            {
                () => (
                    <Form>
                        {
                            formJson.map( input => {
                               if( input.type === 'text' || input.type === 'password' || input.type === 'email')  {
                                return (
                                    <TextInput 
                                        key={input.name} 
                                        label={input.label} 
                                        name={input.name} 
                                        type={input.type as any} 
                                    />
                                )
                            } else if( input.type === 'select') {
                              return(
                                <SelectControl key={input.name} label={input.label} name={input.name} >
                                    <option value="">Pick one</option>
                                    {
                                        input.options?.map(option => (                                            
                                            <option key={ option.value } value={option.value}>{ option.label }</option>
                                        ))
                                    }
                                </SelectControl>
                              )
                            } else 
                                 throw new Error(`El type ${input.type} no es soportado`) 
                            })
                        }
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
