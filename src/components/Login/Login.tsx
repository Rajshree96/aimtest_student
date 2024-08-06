import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { RootState } from 'redux/store';
import postLogin from 'redux/action/Login';
import mainLogo from 'Images/mainLogo.png';
import { loader } from 'redux/reducer/Loader';
import { Loader } from 'components/Loader/Loader';

const Login = () => {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state?.login.loginData);
  const load = useSelector((state: RootState) => state?.loader.loader);

  const intialValues: loginType = {
    userName: '',
    password: '',
  };
  if (token && token.length > 0) {
    setTimeout(() => {
      Router.push('dashboard');
    }, 2000);
  }
  return (
    <div className='main-section'>
      <div className='app'>
        <div className='bg'></div>
        <Loader open={load} />
        <Formik
          initialValues={intialValues}
          validationSchema={Yup.object().shape({
            userName: Yup.string().required('Required'),
            password: Yup.string()
              .min(6, 'Minimum 6 Character Required')
              .required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            dispatch(loader(true));
            dispatch(postLogin(values) as unknown as AnyAction);
            setTimeout(() => {
              resetForm();
            }, 2000);
          }}
        >
          {(props) => (
            <>
              <Form onSubmit={props.handleSubmit} className='login-form'>
                <header>
                  <Image
                    src={mainLogo}
                    alt='loginImage'
                    width='140px'
                    height='110px'
                  />
                </header>
                <div className='inputs'>
                  <div>
                    <h3 className='text-white'>Log In</h3>
                  </div>
                  <div className='label-float'>
                    <Field
                      type='text'
                      name='userName'
                      autoComplete='off'
                      value={props.values.userName}
                      placeholder=' '
                    />
                    <label>Username</label>
                  </div>
                  <div>
                    <ErrorMessage
                      name='userName'
                      component='span'
                      className='error-message'
                    />
                  </div>
                  <div className='label-float'>
                    <Field
                      type='password'
                      name='password'
                      autoComplete='off'
                      value={props.values.password}
                      placeholder=' '
                    />
                    <label>Password</label>
                  </div>
                  <div>
                    <ErrorMessage
                      name='password'
                      component='span'
                      className='error-message'
                    />
                  </div>
                  <div className='forgot-text'>
                    <Link href={{ pathname: 'forgot/password' }}>
                      <span className='forgot-text'> Forgot Password</span>
                    </Link>
                  </div>
                </div>
                <footer>
                  <button className='form-btn' type='submit'>
                    Login
                  </button>
                </footer>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
