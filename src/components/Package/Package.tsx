import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import Image from 'next/image';
import className from 'classnames/bind';
import { Loader } from 'components/Loader/Loader';
import { getPackages } from 'redux/action/Package';
import { loader } from 'redux/reducer/Loader';
import { RootState } from 'redux/store';
import styles from './index.module.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import packageimg from 'Images/package.jpg';
import packimg from 'Images/packageimg.jpg';
import pimg from 'Images/packimage.jpg';
import Link from 'next/link';

const Package = () => {
  const dispatch = useDispatch();
  const cx = className.bind(styles);

  const adminToken = useSelector((state: RootState) => state?.login?.loginData);
  const load = useSelector((state: RootState) => state?.loader.loader);
  const packageData = useSelector(
    (state: RootState) => state?.package?.packageData?.packages
  );

  useEffect(() => {
    dispatch(loader(true));
    dispatch(getPackages(adminToken) as unknown as AnyAction);
  }, [adminToken, dispatch]);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <Loader open={load} />
            <div className={cx('animate__animated animate__slideInRight')}>
              <div className={cx('card')}>
                <div className={cx('p-desc-scroll')}>
                  <div>
                    <div className={cx('spacing')}>
                      <div className={cx('pb-2')}>
                        <h4>Packages</h4>
                      </div>

                      <div className="row">
                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={packageimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={packimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={pimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={packimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={packimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 col-md-4 col-lg-3 col-xs-12">
                          <div className={cx('package-slider')}>
                            <div className={cx('package-card')}>
                              <div className={cx('img-center')}>
                                <Link href="/packagedetail">
                                  <Image src={pimg} alt="img" />
                                </Link>
                              </div>
                              <h4>Class 5th Test</h4>
                              <div className="d-flex justify-content-between my-2">
                                <h6 className="text-success">$ 10.00 0.00</h6>
                                <h6 className="text-danger">
                                  <del>$ 10.00 0.00</del>
                                </h6>
                              </div>
                              <div className={cx('space-btn')}>
                                <Button className={cx('sucess-btn')}>
                                  <FontAwesomeIcon
                                    icon={faPlay}
                                    className={cx('text-white')}
                                  />{' '}
                                  Start Now
                                </Button>
                                <Button className={cx('close-btn')}>
                                  <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className={cx('text-white')}
                                  />{' '}
                                  Full Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default Package;
