interface Route {
    to   : string;
    name : string;
}

export const routes : Route[] = [
    { to: "/", name: 'Home'},
    { to: "/register", name: 'Register'},
    { to: "/formik-basic", name: 'FormikBasic'},
    { to: "/formik-yup", name: 'FormikYup'},
    { to: "/formik-components", name: 'formikComponents'},
    { to: "/formik-abstrack", name: 'formikAbstrack'}

];
