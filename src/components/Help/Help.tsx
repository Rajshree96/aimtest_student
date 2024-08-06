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
import Accordion from 'react-bootstrap/Accordion';

import styles from './index.module.css';
import className from 'classnames/bind';

const User = () => {
  const cx = className.bind(styles);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('card-table')}>
                  <div className={cx('mb-2')}>
                    <h4>Help </h4>
                  </div>

                  <div className={cx('add-scroll')}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Help-1</Accordion.Header>
                        <Accordion.Body>
                          Suspendisse mattis magna augue, sed pretium lacus
                          pellentesque nec. Nullam tincidunt lacinia urna sit
                          amet tincidunt. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Cras consequat justo ac diam aliquet adipiscing. Ut
                          orci nibh, viverra quis luctus id, lacinia quis purus.
                          Vestibulum pharetra diam non nulla pretium
                          scelerisque. Fusce posuere tellus vel mollis auctor.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Help-2</Accordion.Header>
                        <Accordion.Body>
                          Suspendisse mattis magna augue, sed pretium lacus
                          pellentesque nec. Nullam tincidunt lacinia urna sit
                          amet tincidunt. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Cras consequat justo ac diam aliquet adipiscing. Ut
                          orci nibh, viverra quis luctus id, lacinia quis purus.
                          Vestibulum pharetra diam non nulla pretium
                          scelerisque. Fusce posuere tellus vel mollis auctor.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
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
export default User;
