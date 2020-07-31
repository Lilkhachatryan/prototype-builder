import React from 'react';
import * as YUP from 'yup';
import {withFormik} from "formik";
import Field from "./Field";
import {connect} from "react-redux";


const Login = ({values, handleChange, errors, touched, handleBlur}) => {
    function getTouchedAndError(fieldName) {
        return touched[fieldName] && errors[fieldName];
    }

    return (
        <form>
            <Field
                labelText='login'
                errorText={errors.email}
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                hasError={getTouchedAndError('email')}
            />
            <Field
                labelText='password'
                errorText={errors.password}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                hasError={getTouchedAndError('password')}
            />
            <button
                type='button'>
                Log in
            </button>
        </form>
    );
};

const WithLoginForm = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: ''
        };
    },
    validationSchema: YUP.object().shape({
        email: YUP.string().email().required(),
        password: YUP.string().required()
    })
})(Login);


const ConnectedLogin = connect()(WithLoginForm);

export default ConnectedLogin;