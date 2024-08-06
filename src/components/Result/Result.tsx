import {
  faEdit,
  faTrash,
  faSearch,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useState, ChangeEvent } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';
import className from 'classnames/bind';

const dt = [
  {
    id: 1,
    level: 'Administrator',
    username: 'demo@gmail.com',
    name: 'class 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 2,
    level: 'varun',
    username: 'demo@gmail.com',
    name: 'class 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 3,
    level: 'tarun',
    username: 'demo@gmail.com',
    name: 'class 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 4,
    level: 'akash',
    username: 'demo@gmail.com',
    name: 'class 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 5,
    level: 'yash',
    username: 'demo@gmail.com',
    name: 'class 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
];
const Result = () => {
  const cx = className.bind(styles);

  const [checkAll, setCheckAll] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckAll(e.target.checked);
      dt.map((item) => setSelected((pre) => [...pre, item.id]));
    } else {
      setSelected([]);
      setCheckAll(e.target.checked);
    }
  };

  const handleAnother = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.checked) {
      setSelected((prev) => [...prev, id]);
    } else {
      const a = selected.filter((dt) => dt != id);
      setSelected(a);
    }
  };

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('card-table')}>
                  <div className={cx('mb-2')}>
                    <h4>My Result</h4>
                  </div>

                  <div className={cx('table-scroll-result')}>
                    <table className={cx('customers')}>
                      <tr className={cx('table-heading')}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={(e) => handleClick(e)}
                            checked={checkAll}
                          />
                        </td>
                        <td>S No.</td>

                        <td>
                          <div>Exam Name</div>
                        </td>
                        <td>
                          <div>Attempt Date</div>
                        </td>
                        <td>
                          <div>Marks /Max.MarksScored</div>
                        </td>
                        <td>
                          <div>Percentages</div>
                        </td>

                        <td>Action</td>
                      </tr>
                      {dt.map((item) => {
                        return (
                          <>
                            <tr key={item.id} className={cx('table-data')}>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={(e) => handleAnother(e, item.id)}
                                  checked={selected.includes(item.id)}
                                />
                              </td>
                              <td>{item.id}</td>
                              <td>{item.level}</td>
                              <td>{item.username}</td>
                              <td>{item.name}</td>

                              <td>Passed</td>

                              <td>
                                <div className={cx('action-btn')}>
                                  <div>
                                    <div className="con">
                                      <div className="con-tooltip top">
                                        <div className={cx('edit-icon')}>
                                          <FontAwesomeIcon icon={faEdit} />
                                          <div className="tooltip ">
                                            <p>Edit</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="con">
                                      <div className="con-tooltip top">
                                        <div className={cx('delete-icon')}>
                                          <FontAwesomeIcon icon={faTrash} />
                                          <div className="tooltip ">
                                            <p>Delete </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </table>
                  </div>
                  <div className={cx('pagination-style')}>
                    <Pagination className={cx('main-div')}>
                      <Pagination.First />
                      <Pagination.Item>{1}</Pagination.Item>

                      <Pagination.Last />
                    </Pagination>
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
export default Result;
