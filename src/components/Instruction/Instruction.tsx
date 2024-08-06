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

const Instruction = () => {
  const cx = className.bind(styles);

  const [checkAll, setCheckAll] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('card-table')}>
                  <div className={cx('instruction')}>
                    <h4>Instruction</h4>
                  </div>

                  <div className={cx('instruction-scroll')}>
                    <Row className={cx('p-3')}>
                      <div className={cx('mb-1')}>
                        <h4>Memory Test</h4>
                        <p></p>
                      </div>
                      <Col sm={12}>
                        <div className={cx('inst-section')}>
                          <p>
                            This test will check your memory power and comprises
                            of three consucetive test i. e. number test,Letter
                            test, Word test . you will be presented with a
                            series of number . letters and words with a time
                            limit to observe the series . after the time
                            haselapsed you will bequizzed to seewhether you are
                            able to rember the numbres, letters and words or
                            not. it will take several tries to zeroin on your
                            limit.
                          </p>
                        </div>
                      </Col>
                    </Row>
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
export default Instruction;
