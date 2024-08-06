import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import packageimg from 'Images/package.jpg';
import packimg from 'Images/packageimg.jpg';
import pimg from 'Images/packimage.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { Loader } from 'components/Loader/Loader';
import Link from 'next/link';
import Slider from 'react-slick';
import { getExams } from 'redux/action/Exam';
import { loader } from 'redux/reducer/Loader';
import { RootState } from 'redux/store';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './index.module.css';
import addcart from '../../../src/Images/addcart.png';

const ShoppingCart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cx = className.bind(styles);

  const load = useSelector((state: RootState) => state?.loader.loader);
  const adminToken = useSelector((state: RootState) => state?.login.loginData);
  const examData = useSelector(
    (state: RootState) => state?.exam?.examData?.exams
  );

  useEffect(() => {
    dispatch(loader(true));
    dispatch(getExams(adminToken) as unknown as AnyAction);
  }, [adminToken, dispatch]);

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
          <div className={cx('container')}>
            <Loader open={load} />
            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('profile-card')}>
                  <div className={cx('card-table')}>
                    <div className={cx('flex-arrow')}>
                      <Link href="/packagedetail">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className={cx('back-img')}
                        />
                      </Link>
                      <h4>Shopping Cart</h4>
                    </div>
                    <Row className={cx('description-box')}>
                      <Col sm={12}>
                        <div className={cx('description')}>
                          <div
                            className={cx(
                              'animate__animated animate__slideInRight'
                            )}
                          >
                            <div className={cx('addcart')}>
                              <Image
                                src={addcart}
                                alt="img"
                                height="80px"
                                width="80px"
                              />
                            </div>
                            <div className={cx('heading-addcart')}>
                              <h6>YOUR CART IS EMPTY</h6>
                              <p>Add packages to your cart now!</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className={cx('description-box')}>
                      <Col sm={12}>
                        <div className={cx('py-3 px-3')}>
                          <h4>Featured Exam</h4>

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
      </div>
    </>
  );
};
export default ShoppingCart;
