import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import user from '../../../src/Images/user.jpeg';

import styles from './index.module.css';
import classNames from 'classnames/bind';
import { phoneRegExp } from 'components/Validation/Validation';
import { Tab, Tabs } from 'react-bootstrap';

const Profile = () => {
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
                            <h4>My Profile</h4>
                          </div>
                          <Tabs
                            defaultActiveKey="Profile"
                            id="justify-tab-example"
                            className={cx('mb-3')}
                          >
                            <Tab eventKey="Profile" title="Profile">
                              <div className={cx('row no-gutters cards m-0')}>
                                <div className={cx('col-lg-3 card-body')}>
                                  <h5>
                                    <strong className="headings-color">
                                      Profile
                                    </strong>
                                  </h5>
                                  <div className={cx('avatar-upload')}>
                                    <div className={cx('avatar-edit')}>
                                      <input
                                        type="file"
                                        id="imageUpload"
                                        accept=".png, .jpg, .jpeg"
                                      />
                                      <label>
                                        <FontAwesomeIcon icon={faXmark} />
                                      </label>
                                    </div>
                                    <label
                                      htmlFor="imageUpload"
                                      className={cx('avatar-preview')}
                                    >
                                      <Image
                                        src={user}
                                        layout="fill"
                                        alt="profileImage"
                                        className={cx('img-profile')}
                                      />
                                    </label>
                                  </div>
                                </div>
                                <div
                                  className={cx(
                                    'col-lg-9 card-form__body card-body'
                                  )}
                                >
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Full Name
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="fullName"
                                        placeholder="khushi yadav"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>

                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Registered Email
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="email"
                                        placeholder=" khushi@gmail.com"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Inrolment No
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="Inrolment no"
                                        placeholder=" 54545333"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                    </div>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Address
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="adress"
                                        placeholder=" Address"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        School
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="fullName"
                                        placeholder="Model hr sec school"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                    </div>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        DOB
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="fullName"
                                        placeholder="12/05/1994"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Gropus
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="fullNGropusame"
                                        placeholder=" 
                                      Humanity |
                                      Interest |
                                      Knowledge |
                                      Logic |
                                      Psychology |
                                      Research |
                                      Science |"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                    </div>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Class
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="Class"
                                        placeholder="4th"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>
                                  </div>{' '}
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Phone Number
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name=" Phone Number"
                                        placeholder="9854785478"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                    </div>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Alternate Number
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="Alternate Number"
                                        placeholder="857896548"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                      <div>
                                        <ErrorMessage
                                          name="fullName"
                                          component="span"
                                          className="error-message"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={cx('row mx-2')}>
                                    <div className={cx('col-sm-6 my-2')}>
                                      <label
                                        className={cx('label-style')}
                                        htmlFor="fullname"
                                      >
                                        Admission Date
                                      </label>
                                      <Field
                                        type="text"
                                        value={values.fullName}
                                        name="fullName"
                                        placeholder="20/12/2000"
                                        className={cx('form-control')}
                                        autoComplete="off"
                                        disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab>
                            <Tab eventKey="Edit Profile" title="Edit Profile">
                              <div className={cx('profile-card')}>
                                <div className={cx('cards card-form mt-3')}>
                                  <div className={cx('profile-gray')}>
                                    <div className={cx('row no-gutters m-0')}>
                                      <div
                                        className={cx('col-lg-2 card-body ')}
                                      >
                                        <div className={cx('px-2')}>
                                          <h5>
                                            <strong className="headings-color">
                                              Edit Profile
                                            </strong>
                                          </h5>
                                        </div>
                                      </div>
                                      <div className="col-lg-10 card-form__body card-body">
                                        <div className={cx('row mx-2')}>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              Enrolment No
                                            </label>
                                            <Field
                                              type="text"
                                              value={values.oldPassword}
                                              name=" Enrolment No"
                                              placeholder=" Enrolment No"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                              onChange={(e: {
                                                target: { value: string };
                                              }) => {
                                                setEdit(e.target.value),
                                                  handleChange(e);
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="oldPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              Phone Number
                                            </label>
                                            <Field
                                              type="text"
                                              value={values.newPassword}
                                              name="newPassword"
                                              placeholder=" Phone Number"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="newPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              Alternate Number
                                            </label>
                                            <Field
                                              type="text"
                                              value={values.confirmPassword}
                                              name="confirmPassword"
                                              placeholder="  Alternate Number"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="confirmPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                        </div>
                                        <div className={cx('add-btn-1')}>
                                          <Button
                                            className={cx('sucess-btn ')}
                                            variant="success"
                                            type="submit"
                                            onClick={() =>
                                              setSubmitType(() => 'Details')
                                            }
                                          >
                                            <FontAwesomeIcon
                                              icon={faCloudUploadAlt}
                                              className={cx('text-white')}
                                            />
                                            Update
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab>

                            <Tab
                              eventKey="change password"
                              title="change password"
                            >
                              <div className={cx('profile-card')}>
                                <div className={cx('cards card-form mt-3')}>
                                  <div className={cx('profile-gray')}>
                                    <div className={cx('row no-gutters m-0')}>
                                      <div
                                        className={cx('col-lg-3 card-body ')}
                                      >
                                        <div className={cx('px-2')}>
                                          <h5>
                                            <strong className="headings-color">
                                              Change Password
                                            </strong>
                                          </h5>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 card-form__body card-body">
                                        <div className={cx('row mx-2')}>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              Old Password
                                            </label>
                                            <Field
                                              type="password"
                                              value={values.oldPassword}
                                              name="oldPassword"
                                              placeholder="Old Password"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                              onChange={(e: {
                                                target: { value: string };
                                              }) => {
                                                setEdit(e.target.value),
                                                  handleChange(e);
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="oldPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              New Password
                                            </label>
                                            <Field
                                              type="password"
                                              value={values.newPassword}
                                              name="newPassword"
                                              placeholder="New Password"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="newPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                          <div className={cx('col-sm-12 my-1')}>
                                            <label
                                              className={cx('label-style')}
                                              htmlFor="fullname"
                                            >
                                              Confirm Password
                                            </label>
                                            <Field
                                              type="password"
                                              value={values.confirmPassword}
                                              name="confirmPassword"
                                              placeholder="Confirm Password"
                                              autoComplete="off"
                                              className={cx('form-control')}
                                            />
                                          </div>
                                          <div>
                                            <ErrorMessage
                                              name="confirmPassword"
                                              component="span"
                                              className="error-message"
                                            />
                                          </div>
                                        </div>
                                        <div className={cx('add-btn-1')}>
                                          <Button
                                            className={cx('sucess-btn ')}
                                            variant="success"
                                            type="submit"
                                            onClick={() =>
                                              setSubmitType(() => 'Details')
                                            }
                                          >
                                            <FontAwesomeIcon
                                              icon={faCloudUploadAlt}
                                              className={cx('text-white')}
                                            />
                                            Update
                                          </Button>
                                        </div>
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
export default Profile;
