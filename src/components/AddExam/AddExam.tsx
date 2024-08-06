import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

import {
  faPlusCircle,
  faXmark,
  faPlus,
  faTrash,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Select, { GroupBase, MultiValue } from 'react-select';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';
import { RootState } from 'redux/store';
import className from 'classnames/bind';
import { SelectField } from 'components/Select/Select';
import {
  dataQuestionType,
  modeOptions,
  sendReportOptions,
} from 'components/Select/SelectOptions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { postExamData } from 'redux/action/Exam';
import { AnyAction } from 'redux';
import { getPackages } from 'redux/action/Package';
import { getElements } from 'redux/action/Element';
import { getSections } from 'redux/action/Section';
import { getClasses } from 'redux/action/Class';

const AddExam = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const cx = className.bind(styles);

  const packageData = useSelector(
    (state: RootState) => state?.package?.packageData?.packages
  );
  const sectionData = useSelector(
    (state: RootState) => state?.section?.sectionData?.sections
  );
  console.log('dssdfdsf---', sectionData);
  const elementData = useSelector(
    (state: RootState) => state?.element?.elementData?.elements
  );
  const classData = useSelector(
    (state: RootState) => state?.class?.classData?.classes
  );
  const particularExamData = useSelector(
    (state: RootState) => state?.exam?.particularExamData
  );

  const token = useSelector((state: RootState) => state?.login?.loginData);

  const [selectedTest, setSelectedTest] = useState([
    {
      label: 'Number Test',
    },
    {
      label: 'Word Test',
    },
    {
      label: 'Sign Test',
    },
    {
      label: 'Image Test',
    },
    {
      label: 'Passage',
    },
    {
      label: 'Concentration Test',
    },
    {
      label: 'Calculation Test',
    },
    {
      label: 'Reading Test',
    },
    {
      label: 'Writing Test',
    },
    {
      label: 'Audio/Video',
    },
  ]);
  const [count, setCount] = useState(1);
  const [sampleTest, setSampleTest] = useState<{ label: string }[] | []>([]);

  const dataSection = sectionData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });
  const dataPackage = packageData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });
  const dataElement = elementData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });

  const dataClass = classData?.map((item: { name: string }) => {
    return { ...item, label: item.name, value: item.name };
  });

  useEffect(() => {
    dispatch(getPackages(token) as unknown as AnyAction);
    dispatch(getElements(token) as unknown as AnyAction);
    dispatch(getSections(token) as unknown as AnyAction);
    dispatch(getClasses(token) as unknown as AnyAction);
  }, [token, dispatch]);
  const [a, setA] = useState<MultiSelectType[] | MultiValue<MultiSelectType>>(
    []
  );
  useEffect(() => {
    console.log('inuseEfff');
    const a = particularExamData?.testSequence.map(
      (item: { label: string }) => {
        return {
          label: item,
        };
      }
    );
    setSelectedTest(a);
    console.log(a, 'a');
    const b = particularExamData?.sendReport.map(
      (item: { label: string; value: string }) => {
        return {
          label: item,
          value: item,
        };
      }
    );
    setA(b);
  }, [particularExamData?.sendReport, particularExamData?.testSequence]);
  console.log(query?.editId?.length);

  let startPosition: number;
  let endPosition: number;

  const dragStart = (position: number) => {
    startPosition = position;
  };

  const dragEnter = (position: number) => {
    endPosition = position;
  };
  const addInSequence = (e: { label: string }) => {
    e !== null && setSelectedTest((prev) => [...prev, e]);
    const removeSelectedTestFromOptions = sampleTest.filter(
      (item: { label: string }) => item.label !== e.label
    );
    setSampleTest(removeSelectedTestFromOptions);
  };
  const drop = () => {
    const copyListItems = [...selectedTest];
    const dragItemContent = copyListItems[startPosition];
    copyListItems.splice(startPosition, 1);
    copyListItems.splice(endPosition, 0, dragItemContent);
    setSelectedTest(copyListItems);
  };
  const removeTest = (data: { label: string }) => {
    setSampleTest((prev) => [...prev, data]);
    const filteredTest = selectedTest.filter(
      (item: { label: string }) => item.label !== data.label
    );
    setSelectedTest(filteredTest);
  };
  const initialValues: examValues = {
    mode: query.editId?.length ? particularExamData.mode : '',
    package: {
      name: query.editId?.length ? particularExamData.package?.name : '',
      _id: query.editId?.length ? particularExamData.package?._id : '',
    },
    name: query.editId?.length ? particularExamData.name : '',
    options: query.editId?.length
      ? particularExamData?.options
      : [
          {
            section: {
              _id: '',
              name: '',
            },
            element: {
              _id: '',
              name: '',
            },
            noOfQuestions: '',
            questionType: '',
            class: {
              _id: '',
              name: '',
            },
          },
        ],
    sendReport: [],
    sendAudioReport: [],
    showAnswerSheet: query.editId?.length
      ? particularExamData.showAnswerSheet === true
        ? 'Yes'
        : 'No'
      : 'Yes',
    randomQuestion: query.editId?.length
      ? particularExamData.randomQuestion === true
        ? 'Yes'
        : 'No'
      : 'Yes',
    browserTolerence: query.editId?.length
      ? particularExamData.browserTolerence === true
        ? 'Yes'
        : 'No'
      : 'Yes',
    optionShuffle: query.editId?.length
      ? particularExamData.optionShuffle === true
        ? 'Yes'
        : 'No'
      : 'Yes',
    examDuration: query.editId?.length ? particularExamData.examDuration : '',
    attemptCount: query.editId?.length ? particularExamData.attemptCount : '',
    startDate: query.editId?.length
      ? (particularExamData.startDate as string).substring(0, 10)
      : '',
    endDate: query.editId?.length
      ? (particularExamData.endDate as string).substring(0, 10)
      : '',
    testSequence: [''],
  };
  console.log(a, 'a');
  return (
    <>
      {(query.editId === particularExamData?._id ||
        query?.editId === undefined) && (
        <div className={cx('flex-style')}>
          <div className={cx('parent-section')}>
            <div className={cx('text-btn')}>
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required('Required'),
                  package: Yup.object().shape({
                    name: Yup.string().required('Required'),
                  }),
                  examDuration: Yup.number().required('Required'),
                  attemptCount: Yup.number().required('Required'),
                  startDate: Yup.date().required('Required'),
                  endDate: Yup.date().required('Required'),
                  showAnswerSheet: Yup.string().required('Required'),
                  randomQuestion: Yup.string().required('Required'),
                  browserTolerence: Yup.string().required('Required'),
                  optionShuffle: Yup.string().required('Required'),
                  sendReport: Yup.array().min(1, 'Required'),
                  sendAudioReport: Yup.array().min(1, 'Required'),
                  options: Yup.array().of(
                    Yup.object().shape({
                      section: Yup.object().shape({
                        name: Yup.string().required('Required'),
                      }),
                      element: Yup.object().shape({
                        name: Yup.string().required('Required'),
                      }),
                      class: Yup.object().shape({
                        name: Yup.string().required('Required'),
                      }),
                      questionType: Yup.string().required('Required'),
                      noOfQuestions: Yup.number().required('Required'),
                    })
                  ),
                })}
                onSubmit={(values, { resetForm }) => {
                  const report = values.sendReport.map(
                    (item: { label: string }) => item.label
                  );
                  values.sendReport = report as [];
                  const audioReport = values.sendAudioReport.map(
                    (item: { label: string }) => item.label
                  );
                  values.sendAudioReport = audioReport as [];
                  const sequence = selectedTest.map((item) => item.label);
                  values.testSequence = sequence;
                  values.showAnswerSheet === 'Yes'
                    ? (values.showAnswerSheet = true)
                    : (values.showAnswerSheet = false);
                  values.randomQuestion === 'Yes'
                    ? (values.randomQuestion = true)
                    : (values.randomQuestion = false);
                  values.browserTolerence === 'Yes'
                    ? (values.browserTolerence = true)
                    : (values.browserTolerence = false);
                  values.optionShuffle === 'Yes'
                    ? (values.optionShuffle = true)
                    : (values.optionShuffle = false);
                  resetForm();
                  dispatch(postExamData(values, token) as unknown as AnyAction);
                  router.push('/exam');
                }}
              >
                {({
                  values,
                  handleSubmit,
                  setFieldTouched,
                  setFieldValue,
                  errors,
                  handleBlur,
                  touched,
                }) => (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <div
                        className={cx(
                          'animate__animated animate__slideInRight'
                        )}
                      >
                        <div className={cx('card')}>
                          <div className={cx('add-scroll')}>
                            <Row className={cx('m-1 pt-1')}>
                              <Col sm={9}>
                                <div className={cx('card-flex')}>
                                  <Link href='/exam'>
                                    <FontAwesomeIcon
                                      icon={faArrowLeft}
                                      className={cx('back-img')}
                                    />
                                  </Link>
                                  <h4> Add Exam</h4>
                                </div>
                              </Col>

                              <Col sm={3}>
                                <div>
                                  <h6 className={cx('label-style')}> Mode </h6>
                                  <SelectField
                                    name='mode'
                                    options={modeOptions}
                                    value={values.mode}
                                    placeholder='Mode'
                                    onChange={(e) =>
                                      setFieldValue(
                                        'mode',
                                        e &&
                                          (e as SelectType)?.label &&
                                          (e as SelectType).label.length > 0
                                          ? (e as SelectType).label
                                          : ''
                                      )
                                    }
                                    onBlur={setFieldTouched}
                                    error={errors?.mode as string}
                                    touched={
                                      touched?.mode as FormikTouched<boolean>
                                    }
                                  />
                                </div>
                              </Col>
                            </Row>

                            <div className={cx('card-table')}>
                              <Row className={cx('mb-2')}>
                                <Col sm={6}>
                                  <h6 className={cx('label-style')}>
                                    {' '}
                                    Name of Exam
                                  </h6>
                                  <Field
                                    value={values.name}
                                    name='name'
                                    type='text'
                                    className={cx('form-control')}
                                    placeholder='Name Of Exam'
                                    autoComplete='off'
                                  />
                                  <ErrorMessage
                                    className='error-message'
                                    name='name'
                                    component='span'
                                  />
                                </Col>
                                <Col sm={6}>
                                  <h6 className={cx('label-style')}>
                                    {' '}
                                    Package
                                  </h6>
                                  <div>
                                    <SelectField
                                      name='package.name'
                                      options={dataPackage}
                                      value={values.package.name}
                                      placeholder='Select Package'
                                      onChange={(e) => {
                                        console.log(e, 'e');
                                        setFieldValue(
                                          'package',
                                          e &&
                                            (e as SelectType)?.label &&
                                            (e as SelectType).label.length > 0
                                            ? {
                                                _id: (e as SelectType)._id,
                                                name: (e as SelectType).label,
                                              }
                                            : {
                                                _id: '',
                                                name: '',
                                              }
                                        ),
                                          setFieldValue(
                                            'attemptCount',
                                            e &&
                                              (e as SelectType)?.label &&
                                              (e as SelectType).label.length > 0
                                              ? (e as SelectType).attemptCount
                                              : ''
                                          );
                                      }}
                                      onBlur={setFieldTouched}
                                      error={errors?.package?.name as string}
                                      touched={
                                        touched?.package
                                          ?.name as FormikTouched<boolean>
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <h6 className={cx('label-style')}>
                                Sequence Of Exam
                              </h6>
                              <div>
                                {sampleTest.length > 0 && (
                                  <Select
                                    options={
                                      sampleTest as unknown as readonly (
                                        | string
                                        | GroupBase<string>
                                      )[]
                                    }
                                    isClearable
                                    onChange={(e) =>
                                      addInSequence(
                                        e as unknown as { label: string }
                                      )
                                    }
                                    value=''
                                  />
                                )}
                                {selectedTest.length > 0 && (
                                  <div className='row mx-0  my-3 border rounded px-2'>
                                    {selectedTest &&
                                      selectedTest.map(
                                        (item: { label: string }, index) => (
                                          <>
                                            <div className='col-sm-6 my-2 ps-0 '>
                                              <div className='border rounded p-2'>
                                                <div
                                                  className={cx(
                                                    'row align-items-center justify-content-center'
                                                  )}
                                                >
                                                  <div
                                                    className='col-sm-11 main-box-text'
                                                    style={{}}
                                                    onDragStart={() =>
                                                      dragStart(index)
                                                    }
                                                    onDragEnter={() =>
                                                      dragEnter(index)
                                                    }
                                                    onDragEnd={drop}
                                                    key={index}
                                                    draggable
                                                  >
                                                    {item.label}
                                                  </div>
                                                  <div className='col-sm-1 button-box-tag px-1'>
                                                    <button
                                                      type='button'
                                                      className='btn btn-close tag-button'
                                                      key={index}
                                                      onClick={() =>
                                                        removeTest(item)
                                                      }
                                                    ></button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        )
                                      )}
                                  </div>
                                )}
                              </div>
                              <table
                                className={cx(
                                  'table table-bordered table-striped mt-3'
                                )}
                              >
                                <thead>
                                  <tr>
                                    <th className='col-2'>Section Name</th>
                                    <th className='col-2'>Element Name</th>
                                    <th className='col-2'>No of Question</th>
                                    <th className='col-2'>Question Type</th>
                                    <th className='col-2'>Class</th>
                                    <th className='col-1'>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {values.options &&
                                    values.options.length > 0 &&
                                    values.options.map((friend, index) => (
                                      <tr key={index}>
                                        <td scope='row'>
                                          <div>
                                            <SelectField
                                              name={`options.${index}.section.name`}
                                              options={dataSection}
                                              value={
                                                values.options[index].section
                                                  .name
                                              }
                                              placeholder='Select Section'
                                              onChange={(e) => {
                                                setFieldValue(
                                                  `options.${index}.section`,
                                                  e &&
                                                    (e as SelectType)?.label &&
                                                    (e as SelectType).label
                                                      .length > 0
                                                    ? {
                                                        _id: (e as SelectType)
                                                          ._id,
                                                        name: (e as SelectType)
                                                          .label,
                                                      }
                                                    : {
                                                        _id: '',
                                                        name: '',
                                                      }
                                                );
                                                setFieldValue(
                                                  `options.${index}.element`,
                                                  e &&
                                                    (e as SelectType)?.label &&
                                                    (e as SelectType).label
                                                      .length > 0
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
                                              error={
                                                errors.options !== undefined &&
                                                (
                                                  errors?.options[
                                                    index
                                                  ] as FormikErrors<{
                                                    section: {
                                                      _id: string;
                                                      name: string;
                                                    };
                                                  }>
                                                )?.section?.name
                                              }
                                              touched={
                                                touched.options !== undefined &&
                                                touched?.options[index]?.section
                                                  ?.name
                                              }
                                            />
                                          </div>
                                        </td>
                                        <td scope='row'>
                                          <div>
                                            <SelectField
                                              name={`options.${index}.element.name`}
                                              options={dataElement?.filter(
                                                (e: {
                                                  section: { name: string };
                                                }) => {
                                                  return (
                                                    e.section.name ===
                                                      values.options[index]
                                                        .section.name ||
                                                    !values.options[index]
                                                      .section.name
                                                  );
                                                }
                                              )}
                                              placeholder='Select Element'
                                              value={
                                                values.options[index].element
                                                  .name
                                              }
                                              onChange={(e) => {
                                                setFieldValue(
                                                  `options.${index}.element`,
                                                  e &&
                                                    (e as SelectType)?.label &&
                                                    (e as SelectType).label
                                                      .length > 0
                                                    ? {
                                                        _id: (e as SelectType)
                                                          ._id,
                                                        name: (e as SelectType)
                                                          .label,
                                                      }
                                                    : {
                                                        _id: '',
                                                        name: '',
                                                      }
                                                );
                                                e &&
                                                  (
                                                    e as unknown as elementDataType
                                                  )?.section &&
                                                  (
                                                    e as unknown as elementDataType
                                                  ).section.name.length > 0 &&
                                                  setFieldValue(
                                                    `options.${index}.section`,
                                                    e &&
                                                      (
                                                        e as unknown as elementDataType
                                                      )?.section &&
                                                      (
                                                        e as unknown as elementDataType
                                                      ).section.name.length >
                                                        0 && {
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
                                              error={
                                                errors.options !== undefined &&
                                                (
                                                  errors?.options[
                                                    index
                                                  ] as FormikErrors<{
                                                    element: {
                                                      _id: string;
                                                      name: string;
                                                    };
                                                  }>
                                                )?.element?.name
                                              }
                                              touched={
                                                touched.options !== undefined &&
                                                touched?.options[index]?.element
                                                  ?.name
                                              }
                                            />
                                          </div>
                                        </td>
                                        <td scope='row'>
                                          <div>
                                            <Field
                                              type='number'
                                              min='0'
                                              value={
                                                values.options[index]
                                                  .noOfQuestions
                                              }
                                              placeholder='Number Of Question'
                                              name={`options.${index}.noOfQuestions`}
                                              className='form-control custom-control-1'
                                            />
                                            <ErrorMessage
                                              className='error-message'
                                              name={`options.${index}.noOfQuestions`}
                                              component='p'
                                            />
                                          </div>
                                        </td>
                                        <td scope='row'>
                                          <div>
                                            <SelectField
                                              name={`options.${index}.questionType`}
                                              options={dataQuestionType}
                                              value={
                                                values.options[index]
                                                  .questionType
                                              }
                                              onChange={(e) =>
                                                setFieldValue(
                                                  `options.${index}.questionType`,
                                                  e &&
                                                    (e as SelectType)?.label &&
                                                    (e as SelectType).label
                                                      .length > 0
                                                    ? (e as SelectType).label
                                                    : ''
                                                )
                                              }
                                              placeholder='Select Question Type'
                                              onBlur={setFieldTouched}
                                              error={
                                                errors.options !== undefined &&
                                                (
                                                  errors?.options[
                                                    index
                                                  ] as FormikErrors<{
                                                    questionType: string;
                                                  }>
                                                )?.questionType
                                              }
                                              touched={
                                                touched.options !== undefined &&
                                                touched?.options[index]
                                                  ?.questionType
                                              }
                                            />
                                          </div>
                                        </td>
                                        <td scope='row'>
                                          <div>
                                            <SelectField
                                              name={`options.${index}.class.name`}
                                              options={dataClass}
                                              value={
                                                values.options[index].class.name
                                              }
                                              onChange={(e) =>
                                                setFieldValue(
                                                  `options.${index}.class`,
                                                  e &&
                                                    (e as SelectType)?.label &&
                                                    (e as SelectType).label
                                                      .length > 0
                                                    ? {
                                                        _id: (e as SelectType)
                                                          ._id,
                                                        name: (e as SelectType)
                                                          .label,
                                                      }
                                                    : {
                                                        _id: '',
                                                        name: '',
                                                      }
                                                )
                                              }
                                              placeholder='Select Class'
                                              onBlur={setFieldTouched}
                                              error={
                                                errors.options !== undefined &&
                                                (
                                                  errors?.options[
                                                    index
                                                  ] as FormikErrors<{
                                                    class: {
                                                      _id: string;
                                                      name: string;
                                                    };
                                                  }>
                                                )?.class?.name
                                              }
                                              touched={
                                                touched.options !== undefined &&
                                                touched?.options[index]?.class
                                                  ?.name
                                              }
                                            />
                                          </div>
                                        </td>
                                        <td
                                          scope='row'
                                          className={cx('action-td')}
                                        >
                                          <FieldArray
                                            name='options'
                                            render={(arrayHelpers) => (
                                              <div
                                                className={cx('table-btn')}
                                                key={index}
                                              >
                                                {index === count - 1 ? (
                                                  <div className='d-flex gap-2 align-items-center'>
                                                    <div
                                                      className='view-icon'
                                                      onClick={() => {
                                                        arrayHelpers.insert(
                                                          index + count,
                                                          {
                                                            section: {
                                                              _id: '',
                                                              name: '',
                                                            },
                                                            element: {
                                                              _id: '',
                                                              name: '',
                                                            },
                                                            noOfQuestions: '',
                                                            questionType: '',
                                                            class: {
                                                              _id: '',
                                                              name: '',
                                                            },
                                                          }
                                                        );
                                                        setCount(
                                                          (count) => count + 1
                                                        );
                                                      }}
                                                    >
                                                      <FontAwesomeIcon
                                                        icon={faPlus}
                                                        title='Add'
                                                      />
                                                    </div>
                                                    {count > 1 && (
                                                      <div
                                                        className='delete-icon'
                                                        onClick={() => {
                                                          arrayHelpers.remove(
                                                            index
                                                          ),
                                                            setCount(
                                                              (count) =>
                                                                count - 1
                                                            );
                                                        }}
                                                      >
                                                        <FontAwesomeIcon
                                                          icon={faTrash}
                                                          title='Delete'
                                                        />
                                                      </div>
                                                    )}
                                                  </div>
                                                ) : (
                                                  <div
                                                    className='delete-icon'
                                                    onClick={() => {
                                                      arrayHelpers.remove(
                                                        index
                                                      ),
                                                        setCount(
                                                          (count) => count - 1
                                                        );
                                                    }}
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={faTrash}
                                                      title='Delete'
                                                    />
                                                  </div>
                                                )}
                                              </div>
                                            )}
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                              <div className={cx('my-3')}>
                                <div className={cx('flex-input')}>
                                  <div className={cx('field-size')}>
                                    <h6 className={cx('label-style')}>
                                      Exam Duration (Min.)
                                    </h6>
                                    <Field
                                      type='number'
                                      min='0'
                                      value={values.examDuration}
                                      name='examDuration'
                                      className={cx('form-control my-1')}
                                      placeholder='Exam Duration'
                                    />
                                    <ErrorMessage
                                      name='examDuration'
                                      component='span'
                                      className='error-message'
                                    />
                                  </div>
                                  <div className={cx('field-size')}>
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Attempt Count
                                    </h6>
                                    <Field
                                      type='number'
                                      min='0'
                                      name='attemptCount'
                                      disabled
                                      value={values.attemptCount}
                                      className={cx('form-control my-1')}
                                      placeholder='Attempt Count'
                                    />
                                    <ErrorMessage
                                      name='attemptCount'
                                      component='span'
                                      className='error-message'
                                    />
                                  </div>
                                  <div className={cx('field-size')}>
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Start Date
                                    </h6>
                                    <Field
                                      type='Date'
                                      name='startDate'
                                      className={cx('form-control my-1')}
                                      placeholder='Passage ID if any'
                                      value={values.startDate}
                                    />
                                    <ErrorMessage
                                      name='startDate'
                                      component='span'
                                      className='error-message'
                                    />
                                  </div>
                                  <div className={cx('field-size')}>
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      End Date
                                    </h6>
                                    <Field
                                      type='Date'
                                      name='endDate'
                                      className={cx('form-control my-1')}
                                      placeholder='Passage ID if any'
                                      value={values.endDate}
                                    />
                                    <ErrorMessage
                                      name='endDate'
                                      component='span'
                                      className='error-message'
                                    />
                                  </div>
                                </div>

                                <div className={cx('flex-radio')}>
                                  <div className={cx('field-size')}>
                                    {' '}
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Show Answer Sheet{' '}
                                    </h6>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='showAnswerSheet'
                                        checked={
                                          values.showAnswerSheet === 'Yes'
                                            ? true
                                            : false
                                        }
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'showAnswerSheet',
                                            e.target.value
                                          )
                                        }
                                        value='Yes'
                                      />

                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio1'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          Yes
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='showAnswerSheet'
                                        value='No'
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'showAnswerSheet',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio2'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          No
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className={cx('field-size')}>
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Random Question{' '}
                                    </h6>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='randomQuestion'
                                        checked={
                                          values.randomQuestion === 'Yes'
                                            ? true
                                            : false
                                        }
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'randomQuestion',
                                            e.target.value
                                          )
                                        }
                                        value='Yes'
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio3'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          Yes
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='randomQuestion'
                                        value='No'
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'randomQuestion',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio4'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          No
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className={cx('field-size')}>
                                    {' '}
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Browse Tolrence{' '}
                                    </h6>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='browserTolerence'
                                        value='Yes'
                                        checked={
                                          values.browserTolerence === 'Yes'
                                            ? true
                                            : false
                                        }
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'browserTolerence',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio5'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          Yes
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='browserTolerence'
                                        value='No'
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'browserTolerence',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio6'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          No
                                        </span>
                                      </label>
                                    </div>
                                  </div>

                                  <div className={cx('field-size')}>
                                    {' '}
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Option Shuffle{' '}
                                    </h6>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='optionShuffle'
                                        value='Yes'
                                        checked={
                                          values.optionShuffle === 'Yes'
                                            ? true
                                            : false
                                        }
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'optionShuffle',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio13'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          Yes
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className={cx(
                                        'form-check form-check-inline'
                                      )}
                                    >
                                      <Field
                                        className={cx('form-check-input')}
                                        type='radio'
                                        name='optionShuffle'
                                        value='No'
                                        onChange={(e: {
                                          target: { value: string };
                                        }) =>
                                          setFieldValue(
                                            'optionShuffle',
                                            e.target.value
                                          )
                                        }
                                      />
                                      <label
                                        className={cx('form-check-label')}
                                        htmlFor='inlineRadio14'
                                      >
                                        <span className={cx('text-radio')}>
                                          {' '}
                                          No
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <Row className={cx('mt-2')}>
                                  <Col sm={6}>
                                    <h6 className={cx('label-style')}>
                                      Send Report
                                    </h6>
                                    <div>
                                      <Select
                                        placeholder='Send Report'
                                        name='sendReport'
                                        isClearable
                                        isMulti
                                        options={sendReportOptions}
                                        onChange={(e) => {
                                          if (e.length > 0) {
                                            setFieldValue('sendReport', e);
                                          } else if (e.length === 0) {
                                            setFieldValue('sendReport', []);
                                          }
                                        }}
                                        onBlur={handleBlur}
                                      />
                                      <ErrorMessage
                                        className='error-message'
                                        name='sendReport'
                                        component='span'
                                      />
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <h6 className={cx('label-style')}>
                                      {' '}
                                      Send Audio Report
                                    </h6>
                                    <div>
                                      <Select
                                        placeholder='Send Audio Report'
                                        name='sendAudioReport'
                                        isClearable
                                        isMulti
                                        options={sendReportOptions}
                                        value={
                                          query.editId !== undefined ? a : []
                                        }
                                        onChange={(e) => {
                                          if (e.length > 0) {
                                            setA(
                                              e as MultiValue<MultiSelectType>
                                            );
                                            setFieldValue('sendAudioReport', e);
                                          } else if (e.length === 0) {
                                            setA([]);
                                            setFieldValue(
                                              'sendAudioReport',
                                              []
                                            );
                                          }
                                        }}
                                        onBlur={handleBlur}
                                      />
                                      <ErrorMessage
                                        className='error-message'
                                        name='sendAudioReport'
                                        component='span'
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <div className={cx('mt-4')}>
                                  <div className={cx('save-close')}>
                                    <Button
                                      className={cx('sucess-btn')}
                                      type='submit'
                                    >
                                      <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        className={cx('text-white mx-1')}
                                      />
                                      Save
                                    </Button>

                                    <Button
                                      className={cx('delete-btn')}
                                      type='button'
                                    >
                                      <FontAwesomeIcon
                                        icon={faXmark}
                                        className={cx('text-white mx-1')}
                                      />
                                      Close
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddExam;
