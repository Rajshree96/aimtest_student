import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styles    from './index.module.css';
// import className from 'classnames/bind';
export const Registration = () => {
    // const cx = className.bind(styles);

    const intialValues = {
        firstname: "",
        lastname: "",
        username: "",
        mobile: "",
        class: "",
        email: "",
        schoolname: "",
        fathername: "",
        mothername: "",
        dob: "",
        password: "",
    };

    const SignupSchema = Yup.object().shape({

        firstname: Yup.string()

            .required('Please Fill Your Firstname')
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

        lastname: Yup.string()
            .required('Please Fill Your Lastname')
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

        username: Yup.string()

            .required('Please Fill Your  Username')
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

        mobile: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10)
            .required('Please Fill Your Phone No.'),

        class: Yup.string()
            .required('Please Fill Your Class'),

        email: Yup.string()
            .required('Please Fill Your Email')
            .email('Invalid email'),

        schoolname: Yup.string()

            .required('Please Fill Your Schoolname')
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

            fathername: Yup.string()

            .required('Please Fill Your Father Name')
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

            mothername: Yup.string()

            .required('Please Fill Your Mother Name')
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
            .min(3, 'Too Short!')
            .max(70, 'Too Long!'),

            
            dob: Yup.string()
            .required('Please Fill Your Date Of Birth'),

        password: Yup.string()
            .required('Please Fill Your Password')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z][0-9]/, 'Password should be alphanumeric.')

    });

    return (
        <div className="r-main-section">
            <div className="r-app">
                <div className="r-bg"></div>
                <Formik initialValues={intialValues}

                    validationSchema={SignupSchema}

                    onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
                        throw new Error('Function not implemented.');
                    }}
                >

                    <>
                        <Form className='registration-form'>

                            <div>
                                <h3 className='text-white'>Sign Up</h3>
                            </div>

                            <div className="r-label-float">
                                <label >First Name:</label>
                                <Field name="firstname" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='firstname'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Last Name:</label>
                                <Field name="lastname" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='lastname'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >User Name:</label>
                                <Field name="username" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='username'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Mobile No.:</label>
                                <Field name="mobile" type="phone" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='mobile'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Class:</label>
                                <Field name="class" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='class'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Email:</label>
                                <Field name="email" type="email" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='email'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >School Name:</label>
                                <Field name="schoolname" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='schoolname'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Father Name:</label>
                                <Field name="fathername" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='fathername'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Mother Name:</label>
                                <Field name="mothername" type="text" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='mothername'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Date Of Birth:</label>
                                <Field name="dob" type="date" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='dob'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <div className="r-label-float">
                                <label >Password:</label>
                                <Field name="password" type="password" />
                            </div>
                            <div className='error-box'>
                                <ErrorMessage
                                    name='password'
                                    component='span'
                                    className='error-message'
                                />
                            </div>

                            <button className='form-btn' type='submit'>
                                Register
                            </button>

                        </Form>
                    </>
                </Formik>
            </div>
        </div>
    )
}
