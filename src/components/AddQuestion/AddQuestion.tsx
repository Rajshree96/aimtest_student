import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FormikErrors,
} from 'formik';
import Link from 'next/link';

import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { AnyAction } from 'redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
  faArrowLeft,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import 'suneditor/dist/css/suneditor.min.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';
import { RootState } from 'redux/store';
import className from 'classnames/bind';
import {
  dataMarks,
  level,
  optionsMarks,
} from 'components/Select/SelectOptions';
import { getClasses } from 'redux/action/Class';
import TextEditor from 'components/Editor/Editor';
import { getElements } from 'redux/action/Element';
import { getSections } from 'redux/action/Section';
import { SelectField } from 'components/Select/Select';
import { addQuestion, putQuestionData } from 'redux/action/Question';

let previesSelect: string | null = 'Objective';

const forms: formsType[] = [
  {
    menuName: 'Objective',
  },
  {
    menuName: 'Subjective',
  },
  {
    menuName: 'Media',
  },
  {
    menuName: 'Other',
  },
];

const AddQuestion = () => {
  const router = useRouter();
  const query = router.query;
  const dispatch = useDispatch();
  const sectionId = Cookies.get('sectionId');
  const elementId = Cookies.get('elementId');
  const sectionName = Cookies.get('sectionName');
  const elementName = Cookies.get('elementName');

  const cx = className.bind(styles);

  const sectionData = useSelector(
    (state: RootState) => state?.section?.sectionData?.sections
  );

  const classData = useSelector(
    (state: RootState) => state?.class?.classData?.classes
  );
  const elementData = useSelector(
    (state: RootState) => state?.element?.elementData?.elements
  );

  const particularQuestionData = useSelector(
    (state: RootState) => state?.question?.particularQuestionData
  );
  const token = useSelector((state: RootState) => state?.login?.loginData);

  const [selectForm, setSelectForm] = useState<string | null>('Objective');

  const [count, setCount] = useState(1);

  const dataClass = classData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });

  const dataSection = sectionData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });
  const dataElement = elementData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });

  useEffect(() => {
    dispatch(getElements(token) as unknown as AnyAction);
    dispatch(getSections(token) as unknown as AnyAction);
    dispatch(getClasses(token) as unknown as AnyAction);
  }, [token, dispatch]);

  const validation = () => {
    return Yup.object().shape({
      options: Yup.array().of(
        Yup.object().shape({
          title: Yup.string().required('Required'),
          percentage: Yup.string().required('Required'),
        })
      ),
      section: Yup.object().shape({
        name: Yup.string().required('Required'),
      }),
      element: Yup.object().shape({
        name: Yup.string().required('Required'),
      }),
      class: Yup.object().shape({
        name: Yup.string().required('Required'),
      }),
      difficultyLevel: Yup.string().required('Required'),
      marks: Yup.string().required('Required'),
      question: Yup.string().required('Required'),
    });
  };

  const setSelectObjectValue = useCallback(
    (
      event: { label: string; _id: string },
      setFieldValue: (
        arg0: string,
        arg1: { _id: string; name: string }
      ) => void,
      fieldName: string
    ) => {
      if (event && event?.label && event.label.length > 0) {
        setFieldValue(`${fieldName}`, { _id: event._id, name: event.label });
      } else {
        setFieldValue(`${fieldName}`, { _id: '', name: '' });
      }
    },
    []
  );

  const setSelectSingleValue = useCallback(
    (
      event: { label: string },
      setFieldValue: (arg0: string, arg1: string) => void,
      fieldName: string
    ) => {
      if (event && event?.label && event.label.length > 0) {
        setFieldValue(`${fieldName}`, event.label);
      } else {
        setFieldValue(`${fieldName}`, '');
      }
    },
    []
  );

  return (
    <>
      {(query?.editId === particularQuestionData?._id ||
        query?.editId === undefined) && (
        <div className={cx('flex-style')}>
          <div className={cx('parent-section')}>
            <div className={cx('text-btn')}>
              <Formik
                initialValues={{
                  type: query?.editId?.length
                    ? particularQuestionData?.type
                    : '',
                  question: query?.editId?.length
                    ? particularQuestionData?.question
                    : '',
                  section: {
                    _id: query?.editId?.length
                      ? particularQuestionData?.section?._id
                      : sectionId
                      ? sectionId
                      : '',
                    name: query?.editId?.length
                      ? particularQuestionData?.section?.name
                      : sectionName
                      ? sectionName
                      : '',
                  },
                  element: {
                    _id: query?.editId?.length
                      ? particularQuestionData?.element?._id
                      : elementId
                      ? elementId
                      : '',
                    name: query?.editId?.length
                      ? particularQuestionData?.element?.name
                      : elementName
                      ? elementName
                      : '',
                  },
                  marks: query?.editId?.length
                    ? particularQuestionData?.marks
                    : '',
                  difficultyLevel: query?.editId?.length
                    ? particularQuestionData?.difficultyLevel
                    : '',
                  class: {
                    _id: query?.editId?.length
                      ? particularQuestionData?.class?._id
                      : '',
                    name: query?.editId?.length
                      ? particularQuestionData?.class?.name
                      : '',
                  },
                  options: query?.editId?.length
                    ? particularQuestionData?.options?.length === 0
                      ? [{ title: '', isCorrect: false, percentage: '' }]
                      : (particularQuestionData?.options as [])
                    : [{ title: '', isCorrect: false, percentage: '' }],
                }}
                validationSchema={validation()}
                onSubmit={(values) => {
                  Cookies.remove('elementId');
                  Cookies.remove('sectionId');
                  Cookies.remove('sectionName');
                  Cookies.remove('elementName');
                  values.type = selectForm as string;
                  query?.editId?.length
                    ? dispatch(
                        putQuestionData(
                          query?.editId as string,
                          values,
                          token
                        ) as unknown as AnyAction
                      )
                    : dispatch(
                        addQuestion(values, token) as unknown as AnyAction
                      );
                  router.push('/question');
                }}
              >
                {({
                  handleChange,
                  setFieldValue,
                  setFieldTouched,
                  resetForm,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form>
                    <div
                      className={cx('animate__animated animate__slideInRight')}
                    >
                      <div className={cx('card')}>
                        <div className={cx('add-scroll')}>
                          <div className={cx('card-table')}>
                            <div className={cx('card-flex')}>
                              <Link href="/question">
                                <FontAwesomeIcon
                                  icon={faArrowLeft}
                                  className={cx('back-img')}
                                />
                              </Link>
                              <h4> Add Question</h4>
                            </div>
                            <div className="label-floating my-1">
                              <Tabs
                                defaultActiveKey="Objective"
                                transition={false}
                                onSelect={(e) => {
                                  setSelectForm(e);

                                  e !== previesSelect &&
                                  previesSelect !== undefined
                                    ? ((previesSelect = e), resetForm())
                                    : (previesSelect = e);
                                }}
                                id="noanim-tab-example"
                                className={cx('main-tab')}
                              >
                                {forms?.map(({ menuName }, index) => (
                                  <Tab
                                    eventKey={menuName}
                                    title={menuName}
                                    key={index}
                                  >
                                    <h6 className={cx('my-2')}> Question</h6>
                                    <div>
                                      <TextEditor
                                        name="question"
                                        placeholder="Enter Question"
                                        todo="create"
                                        editorValue={values?.question}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                      />
                                      {errors?.question && (
                                        <p className="error-message">{` ${`${errors?.question}`}`}</p>
                                      )}
                                    </div>
                                    <div>
                                      {menuName === 'Objective' && (
                                        <div className={cx('my-2')}>
                                          <h6>Options</h6>
                                        </div>
                                      )}
                                      {selectForm === forms[0]?.menuName && (
                                        <FieldArray
                                          name="options"
                                          render={(arrayHelpers) => (
                                            <div>
                                              {values?.options?.map(
                                                (
                                                  friend: unknown,
                                                  index: number
                                                ) => (
                                                  <div key={index}>
                                                    <Row
                                                      className={cx(
                                                        ' mt-1 mb-2'
                                                      )}
                                                    >
                                                      <Col
                                                        className={cx(
                                                          'flex-icon-1'
                                                        )}
                                                      >
                                                        <Field
                                                          name={`options[${index}].isCorrect`}
                                                          render={({
                                                            field,
                                                          }: {
                                                            field: {
                                                              name: string;
                                                              value: string;
                                                            };
                                                          }) => (
                                                            <div
                                                              className={cx(
                                                                'checkbox-required'
                                                              )}
                                                            >
                                                              <input
                                                                {...field}
                                                                type="checkbox"
                                                                checked={
                                                                  values
                                                                    ?.options[
                                                                    index as number
                                                                  ]?.isCorrect
                                                                }
                                                                onChange={() =>
                                                                  setFieldValue(
                                                                    `options[${index}].isCorrect`,
                                                                    !values
                                                                      ?.options[
                                                                      index as number
                                                                    ]?.isCorrect
                                                                  )
                                                                }
                                                              />
                                                            </div>
                                                          )}
                                                        />

                                                        <div className="col">
                                                          <Field
                                                            name={`options[${index}].title`}
                                                            className={cx(
                                                              'form-control '
                                                            )}
                                                            placeholder="Enter Option"
                                                            onChange={
                                                              handleChange
                                                            }
                                                            autoComplete="off"
                                                          />

                                                          <ErrorMessage
                                                            name={`options[${index}].title`}
                                                            component="span"
                                                            className="error-message "
                                                          />
                                                        </div>
                                                        <div className="col">
                                                          <SelectField
                                                            name={`options[${index}].percentage`}
                                                            options={
                                                              optionsMarks
                                                            }
                                                            value={
                                                              values?.options[
                                                                index as number
                                                              ]?.percentage
                                                            }
                                                            placeholder="Select Percentage"
                                                            onChange={(e) => {
                                                              setFieldValue(
                                                                `options[${index}].percentage`,
                                                                e &&
                                                                  (
                                                                    e as SelectType
                                                                  )?.label &&
                                                                  (
                                                                    e as SelectType
                                                                  )?.label
                                                                    .length > 0
                                                                  ? (
                                                                      e as SelectType
                                                                    ).label
                                                                  : ''
                                                              );
                                                            }}
                                                            onBlur={
                                                              setFieldTouched
                                                            }
                                                            error={
                                                              errors?.options !==
                                                                undefined &&
                                                              (
                                                                errors?.options[
                                                                  index
                                                                ] as FormikErrors<{
                                                                  percentage: string;
                                                                }>
                                                              )?.percentage
                                                            }
                                                            touched={
                                                              touched?.options !==
                                                                undefined &&
                                                              touched?.options[
                                                                index
                                                              ]?.percentage
                                                            }
                                                          />
                                                        </div>
                                                        <div
                                                          className={cx(
                                                            'icon-style'
                                                          )}
                                                        >
                                                          {index ===
                                                          count - 1 ? (
                                                            <>
                                                              <div
                                                                className={cx(
                                                                  'addoption-icon'
                                                                )}
                                                                onClick={() => {
                                                                  arrayHelpers?.insert(
                                                                    index +
                                                                      count,
                                                                    {
                                                                      title: '',
                                                                      isCorrect:
                                                                        false,
                                                                      percentage:
                                                                        '',
                                                                    }
                                                                  ),
                                                                    setCount(
                                                                      count + 1
                                                                    );
                                                                }}
                                                              >
                                                                <FontAwesomeIcon
                                                                  icon={faPlus}
                                                                  title="Add"
                                                                />
                                                              </div>

                                                              {count > 1 && (
                                                                <div
                                                                  className={cx(
                                                                    'removeoption-icon'
                                                                  )}
                                                                  onClick={() => {
                                                                    arrayHelpers.remove(
                                                                      index as number
                                                                    ),
                                                                      setCount(
                                                                        (
                                                                          count
                                                                        ) =>
                                                                          count -
                                                                          1
                                                                      );
                                                                  }}
                                                                >
                                                                  <FontAwesomeIcon
                                                                    icon={
                                                                      faXmark
                                                                    }
                                                                    title="Delete"
                                                                  />
                                                                </div>
                                                              )}
                                                            </>
                                                          ) : (
                                                            <>
                                                              <div
                                                                className={cx(
                                                                  'removeoption-icon'
                                                                )}
                                                                onClick={() => {
                                                                  arrayHelpers.remove(
                                                                    index as number
                                                                  ),
                                                                    setCount(
                                                                      (count) =>
                                                                        count -
                                                                        1
                                                                    );
                                                                }}
                                                              >
                                                                <FontAwesomeIcon
                                                                  icon={faXmark}
                                                                  title="Delete"
                                                                />
                                                              </div>
                                                              <div
                                                                id="hidebox"
                                                                className={cx(
                                                                  'removeoption-icon'
                                                                )}
                                                              ></div>
                                                            </>
                                                          )}
                                                        </div>
                                                      </Col>
                                                    </Row>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          )}
                                        />
                                      )}
                                    </div>
                                  </Tab>
                                ))}
                              </Tabs>
                              <Row className="my-3">
                                <Col>
                                  <h6> Section</h6>
                                  <SelectField
                                    name="section.name"
                                    options={dataSection}
                                    value={values?.section?.name}
                                    placeholder="Select Section"
                                    onChange={(e) => {
                                      setFieldValue(
                                        `section`,
                                        e &&
                                          (e as SelectType)?.label &&
                                          (e as SelectType)?.label.length > 0
                                          ? {
                                              _id: (e as SelectType)._id,
                                              name: (e as SelectType).label,
                                            }
                                          : {
                                              _id: '',
                                              name: '',
                                            }
                                      );
                                      setFieldValue(
                                        `element`,
                                        e &&
                                          (e as SelectType)?.label &&
                                          (e as SelectType)?.label.length > 0
                                          ? {
                                              _id: '',
                                              name: '',
                                            }
                                          : {
                                              _id: '',
                                              name: '',
                                            }
                                      );
                                    }}
                                    onBlur={setFieldTouched}
                                    error={errors?.section?.name as string}
                                    touched={touched?.section?.name as boolean}
                                  />
                                </Col>
                                <Col>
                                  <h6> Elements</h6>
                                  <SelectField
                                    name="element.name"
                                    options={dataElement?.filter(
                                      (e: { section: { name: string } }) => {
                                        return (
                                          e?.section?.name ===
                                            values?.section?.name ||
                                          !values?.section?.name
                                        );
                                      }
                                    )}
                                    value={values?.element?.name}
                                    placeholder="Select Element"
                                    onChange={(e) => {
                                      setFieldValue(
                                        `element`,
                                        e &&
                                          (e as SelectType)?.label &&
                                          (e as SelectType)?.label.length > 0
                                          ? {
                                              _id: (e as SelectType)._id,
                                              name: (e as SelectType).label,
                                            }
                                          : {
                                              _id: '',
                                              name: '',
                                            }
                                      );
                                      e &&
                                        (e as unknown as elementDataType)
                                          ?.section &&
                                        (e as unknown as elementDataType)
                                          ?.section.name.length > 0 &&
                                        setFieldValue(
                                          `section`,
                                          e &&
                                            (e as unknown as elementDataType)
                                              ?.section &&
                                            (e as unknown as elementDataType)
                                              .section.name.length > 0 && {
                                              _id: (
                                                e as unknown as elementDataType
                                              ).section?._id,
                                              name: (
                                                e as unknown as elementDataType
                                              ).section?.name,
                                            }
                                        );
                                    }}
                                    onBlur={setFieldTouched}
                                    error={errors?.element?.name as string}
                                    touched={touched?.element?.name as boolean}
                                  />
                                </Col>
                              </Row>
                              <Row className="my-3">
                                <Col>
                                  <h6> Marks</h6>
                                  <SelectField
                                    name="marks"
                                    options={dataMarks}
                                    value={values?.marks}
                                    onChange={(e) =>
                                      setSelectSingleValue(
                                        e as SelectType,
                                        setFieldValue,
                                        'marks'
                                      )
                                    }
                                    placeholder="Select Marks"
                                    applyValidation={previesSelect as string}
                                    onBlur={setFieldTouched}
                                    error={errors?.marks as string}
                                    touched={touched?.marks as boolean}
                                  />
                                </Col>
                                <Col>
                                  <h6> Difficulty Level</h6>
                                  <SelectField
                                    name="difficultyLevel"
                                    options={level}
                                    value={values?.difficultyLevel}
                                    onChange={(e) =>
                                      setSelectSingleValue(
                                        e as SelectType,
                                        setFieldValue,
                                        'difficultyLevel'
                                      )
                                    }
                                    placeholder="Select Difficulty Level"
                                    applyValidation={previesSelect as string}
                                    onBlur={setFieldTouched}
                                    error={errors?.difficultyLevel as string}
                                    touched={
                                      touched?.difficultyLevel as boolean
                                    }
                                  />
                                </Col>
                                <Col>
                                  <h6> Please Select Class</h6>
                                  <SelectField
                                    name="class.name"
                                    options={dataClass}
                                    value={values?.class.name}
                                    onChange={(e) =>
                                      setSelectObjectValue(
                                        e as SelectType1,
                                        setFieldValue,
                                        'class'
                                      )
                                    }
                                    placeholder="Select Class"
                                    onBlur={setFieldTouched}
                                    applyValidation={previesSelect as string}
                                    error={errors?.class?.name as string}
                                    touched={touched?.class?.name as boolean}
                                  />
                                </Col>
                              </Row>
                              <div className={cx('save-close')}>
                                <Button
                                  className={cx('sucess-btn')}
                                  type="submit"
                                >
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    className="text-white mx-1"
                                  />
                                  Save
                                </Button>
                                <Button
                                  className={cx('delete-btn')}
                                  onClick={() => {
                                    router.push('/question');
                                    Cookies.remove('elementId');
                                    Cookies.remove('sectionId');
                                    Cookies.remove('sectionName');
                                    Cookies.remove('elementName');
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    className="text-white mx-1"
                                  />
                                  Close
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddQuestion;

('<p>asdfasdfasdf</p>');
