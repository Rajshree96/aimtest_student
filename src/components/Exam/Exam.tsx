import { AnyAction } from 'redux';
import { useRouter } from 'next/router';
import className from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { RootState } from 'redux/store';
import styles from './index.module.css';
import { loader } from 'redux/reducer/Loader';
import { Loader } from 'components/Loader/Loader';
import ExamTable from 'components/Table/ExamTable';
import { getExams } from 'redux/action/Exam';
import { Tab, Tabs } from 'react-bootstrap';

const Exam = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cx = className.bind(styles);

  const load = useSelector((state: RootState) => state?.loader.loader);
  const adminToken = useSelector((state: RootState) => state?.login.loginData);
  const examData = useSelector(
    (state: RootState) => state?.exam?.examData?.exams
  );

  const [page, setPage] = useState(1);
  const [todo, setTodo] = useState('');
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [deleteType, setDeleteType] = useState('');
  const [deleteCount, setDeleteCount] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const [deleteValue, setDeleteValue] = useState('');
  const [pageWiseData, setPageWiseData] = useState([]);

  const endingIndex = 15 * page;
  const startingIndex = 15 * (page - 1);

  useEffect(() => {
    const dataToDisplay = examData?.slice(startingIndex, endingIndex);
    setPageWiseData(dataToDisplay);
  }, [startingIndex, endingIndex, examData]);

  useEffect(() => {
    dispatch(loader(true));
    dispatch(getExams(adminToken) as unknown as AnyAction);
  }, [adminToken, dispatch]);

  const searchList = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearch(value);
  };

  const Delete = () => {
    setModalShow(true);
    setTodo('delete');
    setDeleteType('global');
    values.length === 0
      ? setDeleteValue('zero')
      : values.length >= 1 &&
        (setDeleteValue('multiple'), setDeleteCount(values.length));
  };
  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div>
            <Loader open={load} />

            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('card-table')}>
                  <div>
                    <h4>Exam</h4>
                  </div>
                  <div>
                    <Tabs
                      defaultActiveKey="Free Exam"
                      id="justify-tab-example"
                      className={cx('mb-3')}
                      // justify
                    >
                      <Tab eventKey="Free Exam" title="Free Exam">
                        <div className={cx('mb-2')}>
                          <h6>Free Exam</h6>
                        </div>

                        <ExamTable
                          setValues={setValues}
                          setPage={setPage}
                          searchData={search}
                          valueOfPage={pageNumber}
                        />
                      </Tab>
                      <Tab eventKey="Paid Exam" title="Paid Exam">
                        <div className={cx('mb-2')}>
                          <h6>Paid Exam</h6>
                        </div>
                        <ExamTable
                          setValues={setValues}
                          setPage={setPage}
                          searchData={search}
                          valueOfPage={pageNumber}
                        />
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Exam;
