import { createBrowserRouter,  } from "react-router-dom";
import App from '../App';
import { FormikAbstrack, FormikBasic, FormikComponents, FormikYup, Home, Register } from "../forms/pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'register', element: <Register />,  },
            { path: 'formik-basic', element: <FormikBasic />,  },
            { path: 'formik-yup', element: <FormikYup />,  },
            { path: 'formik-components', element: <FormikComponents />,  },
            { path: 'formik-abstrack', element: <FormikAbstrack />,  },
        ]
    },
    {
    path: '*',
    element: <h1>Not found</h1>,
    },
]);

