// import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';
import className from 'classnames/bind';

const Popup = (props: { show: boolean; onClose: () => void }) => {
  const cx = className.bind(styles);

  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={cx('d-flex')}>
          <Modal.Title>Add Counseling Section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className={cx('my-3')}>
              <Col sm={6}>
                <Form.Select
                  className={cx('mb-3')}
                  aria-label="Default select example"
                >
                  <option> Select Classes</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Select
                  className={cx('mb-3')}
                  aria-label="Default select example"
                >
                  <option> All Percentage</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Select
                  className={cx('mb-3')}
                  aria-label="Default select example"
                >
                  <option> All Element</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Select
                  className={cx('mb-3')}
                  aria-label="Default select example"
                >
                  <option> Select Part</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col sm={12}>
                <textarea
                  name=""
                  id=""
                  className={cx('form-control')}
                  rows={5}
                  placeholder="Description"
                ></textarea>
                <Button className={cx('close-btn mt-3')}>Load Editor</Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={cx('sucess-btn')}>
            <FontAwesomeIcon icon={faPlus} className={cx('text-white')} />
            Save Setting
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Popup;
