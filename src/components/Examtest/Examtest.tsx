import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import user from '../../../src/Images/user.jpeg';

import styles from './index.module.css';
import classNames from 'classnames/bind';
import { phoneRegExp } from 'components/Validation/Validation';
import { Tab, Tabs } from 'react-bootstrap';
import mainLogo from 'Images/aimenter.png';

const Examtest = () => {
  const router = useRouter();
  const cx = classNames.bind(styles);

  const [submitType, setSubmitType] = useState('');
  const [edit, setEdit] = useState('');

  useEffect(() => {
    console.log('edit', edit);
  }, [edit, edit.length]);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('container')}>
              <Formik
                initialValues={{
                  fullName: '',
                  userName: '',
                  email: '',
                  mobile: '',
                  oldPassword: '',
                  newPassword: '',
                  confirmPassword: '',
                }}
                validationSchema={
                  submitType === 'Password'
                    ? Yup.object().shape({
                        fullName: Yup.string().required('Required'),
                        userName: Yup.string().required('Required'),
                        email: Yup.string()
                          .email('Must Be Valid Email')
                          .required('Required'),
                        mobile: Yup.string()
                          .required('Required')
                          .matches(phoneRegExp, 'Phone number is not valid')
                          .min(10, 'Must Be 10 Digits')
                          .max(10, 'Must Be 10 Digits'),
                        oldPassword: Yup.string()
                          .required('Required')
                          .min(6, 'Minimum 6 Character Required'),
                        newPassword: Yup.string()
                          .required('Required')
                          .min(6, 'Minimum 6 Character Required'),
                        confirmPassword: Yup.string()
                          .required('Required')
                          .min(6, 'Minimum 6 Character Required')
                          .when('newPassword', {
                            is: (val: string) =>
                              val && val.length > 0 ? true : false,
                            then: Yup.string().oneOf(
                              [Yup.ref('newPassword')],
                              'Password Not Matched'
                            ),
                          }),
                      })
                    : Yup.object().shape({
                        fullName: Yup.string().required('Required'),
                        userName: Yup.string().required('Required'),
                        email: Yup.string()
                          .email('Must Be Valid Email')
                          .required('Required'),
                        mobile: Yup.string()
                          .required('Required')
                          .matches(phoneRegExp, 'Phone number is not valid')
                          .min(10, 'Must Be 10 Digits')
                          .max(10, 'Must Be 10 Digits'),
                      })
                }
                onSubmit={(values) => {
                  const postData = JSON.parse(JSON.stringify(values));
                  if (submitType === 'Details') {
                    delete postData.oldPassword;
                    delete postData.newPassword;
                    delete postData.confirmPassword;
                    console.log(postData, 'postData');
                    router.back();
                  } else {
                    delete postData.fullName;
                    delete postData.userName;
                    delete postData.mobile;
                    delete postData.email;
                    delete postData.oldPassword;
                    console.log(postData, 'postData');
                    router.back();
                  }
                }}
              >
                {({ values, handleSubmit, handleChange }) => (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <div
                        className={cx(
                          'animate__animated animate__slideInRight'
                        )}
                      >
                        <div className={cx('cards card-form')}>
                          <div className={cx('mb-2')}>
                            <h4>Test</h4>
                          </div>
                          <Tabs
                            defaultActiveKey=" Number Test"
                            id="justify-tab-example"
                            className={cx('mb-3')}
                          >
                            <Tab eventKey=" Number Test" title=" Number Test">
                              <div className={cx('profile-card')}>
                                <div className={cx('cards card-form mt-3')}>
                                  <div className={cx('profile-gray')}>
                                    <div className={cx('row no-gutters m-0')}>
                                      <div
                                        className={cx(
                                          'col-lg-9 card-form__body card-body'
                                        )}
                                      >
                                        <div className={cx('text-instruction')}>
                                          <p>
                                            KindlyRead theinstructions carefully
                                            before beginning the test as this
                                            test is a consecutive test for your
                                            memory and consists of three tests
                                            i.e. Number Test, Letter Test, Word
                                            Test.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={cx('py-3 px-0')}>
                                        <h6>Question:1</h6>
                                      </div>
                                      <div className={cx('Enter-btn')}>
                                        <div>
                                          <h5>Time Limit : 10 Seconds</h5>
                                        </div>

                                        <div className={cx('my-3')}>
                                          <button
                                            className={cx('custom-btn btn-3')}
                                          >
                                            Show Numbres
                                          </button>
                                        </div>
                                        <div className={cx('style-number')}>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInLeftBig'
                                              )}
                                            >
                                              2
                                            </h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__lightSpeedInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInRightBig'
                                              )}
                                            >
                                              7
                                            </h1>{' '}
                                          </span>
                                        </div>
                                        <Image
                                          src={mainLogo}
                                          alt="loginImage"
                                          width="80px"
                                          height="80px"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab>
                            <Tab eventKey="Letters Test" title="Letters Test">
                              <div className={cx('profile-card')}>
                                <div className={cx('cards card-form mt-3')}>
                                  <div className={cx('profile-gray')}>
                                    <div className={cx('row no-gutters m-0')}>
                                      <div
                                        className={cx(
                                          'col-lg-9 card-form__body card-body'
                                        )}
                                      >
                                        <div className={cx('text-instruction')}>
                                          <p>
                                            KindlyRead theinstructions carefully
                                            before beginning the test as this
                                            test is a consecutive test for your
                                            memory and consists of three tests
                                            i.e. Number Test, Letter Test, Word
                                            Test.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={cx('py-3 px-0')}>
                                        <h6>Question:1</h6>
                                      </div>
                                      <div className={cx('Enter-btn')}>
                                        <div>
                                          <h5>Time Limit : 10 Seconds</h5>
                                        </div>

                                        <div className={cx('my-3')}>
                                          <button
                                            className={cx('custom-btn btn-3')}
                                          >
                                            Show Letters
                                          </button>
                                        </div>
                                        <div className={cx('style-number')}>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInLeftBig'
                                              )}
                                            >
                                              2
                                            </h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__lightSpeedInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInRightBig'
                                              )}
                                            >
                                              7
                                            </h1>{' '}
                                          </span>
                                        </div>
                                        <Image
                                          src={mainLogo}
                                          alt="loginImage"
                                          width="80px"
                                          height="80px"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab>

                            <Tab eventKey="Words Test" title="Words Test">
                              <div className={cx('profile-card')}>
                                <div className={cx('cards card-form mt-3')}>
                                  <div className={cx('profile-gray')}>
                                    <div className={cx('row no-gutters m-0')}>
                                      <div
                                        className={cx(
                                          'col-lg-9 card-form__body card-body'
                                        )}
                                      >
                                        <div className={cx('text-instruction')}>
                                          <p>
                                            KindlyRead theinstructions carefully
                                            before beginning the test as this
                                            test is a consecutive test for your
                                            memory and consists of three tests
                                            i.e. Number Test, Letter Test, Word
                                            Test.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={cx('py-3 px-0')}>
                                        <h6>Question:1</h6>
                                      </div>
                                      <div className={cx('Enter-btn')}>
                                        <div>
                                          <h5>Time Limit : 10 Seconds</h5>
                                        </div>

                                        <div className={cx('my-3')}>
                                          <button
                                            className={cx('custom-btn btn-3')}
                                          >
                                            Show Words
                                          </button>
                                        </div>
                                        <div className={cx('style-number')}>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInLeftBig'
                                              )}
                                            >
                                              2
                                            </h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__lightSpeedInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span
                                            className={cx(
                                              'animate__animated animate__slideInLeft'
                                            )}
                                          >
                                            <h1>2</h1>
                                          </span>
                                          <span>
                                            <h1
                                              className={cx(
                                                'animate__animated animate__fadeInRightBig'
                                              )}
                                            >
                                              7
                                            </h1>{' '}
                                          </span>
                                        </div>
                                        <Image
                                          src={mainLogo}
                                          alt="loginImage"
                                          width="80px"
                                          height="80px"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Examtest;
