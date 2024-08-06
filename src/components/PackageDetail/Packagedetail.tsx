import { AnyAction } from 'redux';
import { useRouter } from 'next/router';
import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import packageimg from 'Images/package.jpg';
import packimg from 'Images/packageimg.jpg';
import pimg from 'Images/packimage.jpg';

import { RootState } from 'redux/store';
import styles from './index.module.css';
import { loader } from 'redux/reducer/Loader';
import { Loader } from 'components/Loader/Loader';
import { getExams } from 'redux/action/Exam';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PackageDetail = () => {
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
                  <div className={cx('flex-arrow')}>
                    <Link href="/package">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={cx('back-img')}
                      />
                    </Link>
                    <h4>Package Detail</h4>
                  </div>
                  <Row className={cx('description-box')}>
                    <Col sm={4}>
                      <div>
                        <div className={cx('detail-card')}>
                          <div className={cx('card-table')}>
                            <div className={cx('package-size')}>
                              <div className={cx('package-detailimg')}>
                                <Image
                                  src={packageimg}
                                  alt="img"
                                  className={cx('package-img')}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={8}>
                      <div className={cx('description')}>
                        <div
                          className={cx(
                            'animate__animated animate__slideInRight'
                          )}
                        >
                          <div className={cx('text-border')}>
                            <h4 className={cx('label-style')}>
                              Product Description
                            </h4>
                          </div>
                          <div className={cx('my-2')}>
                            <h5 className={cx('label-style')}>New</h5>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                          <div className={cx('my-3')}>
                            <h4>Class 5th Test</h4>
                            <div className="d-flex justify-content-between my-2">
                              <h6 className="text-success">$ 10.00 0.00</h6>
                              <h6 className="text-danger">
                                <del>$ 10.00 0.00</del>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className={cx('description-box')}>
                    <Col sm={12}>
                      <div className={cx('py-3 px-3')}>
                        <h4>Product Description</h4>

                        <Slider {...settings}>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <div>
                                  <Image src={packimg} alt="img" />
                                </div>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <div>
                                  <Image src={packimg} alt="img" />
                                </div>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <Image src={packageimg} alt="img" />
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <Image src={pimg} alt="img" />
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <Image src={packageimg} alt="img" />
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className={cx('package-slider')}>
                              <div>
                                <Image src={pimg} alt="img" />
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PackageDetail;
